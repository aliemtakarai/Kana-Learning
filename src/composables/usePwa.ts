import { ref, onMounted, readonly } from 'vue'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

const needRefresh = ref(false)
const canInstall = ref(false)
const isInstalled = ref(false)
const isIos = ref(false)
const showIosInstructions = ref(false)
const installDismissed = ref(false)

let deferredPrompt: BeforeInstallPromptEvent | null = null
let registration: ServiceWorkerRegistration | null = null

export function usePwa() {
  const registerServiceWorker = async () => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return
    }

    try {
      registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' })

      // Check if an updated worker is already waiting
      if (registration.waiting) {
        needRefresh.value = true
      }

      // Detect when a new service worker is installed
      registration.addEventListener('updatefound', () => {
        const newWorker = registration?.installing
        if (!newWorker) return

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available and waiting -> triggers in-app toast
            needRefresh.value = true
          }
        })
      })

      // Reload page when new service worker takes control
      let refreshing = false
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true
          window.location.reload()
        }
      })

      // Periodically check for updates (every 30 mins)
      setInterval(() => {
        registration?.update().catch(() => {})
      }, 30 * 60 * 1000)

      // Also check on tab focus / visibility
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          registration?.update().catch(() => {})
        }
      })
    } catch (error) {
      console.warn('Service worker registration failed:', error)
    }
  }

  // Apply update & reload
  const updateServiceWorker = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    } else {
      window.location.reload()
    }
  }

  const dismissUpdate = () => {
    needRefresh.value = false
  }

  // Trigger Add to Home Screen install prompt
  const installApp = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt()
        const choice = await deferredPrompt.userChoice
        if (choice.outcome === 'accepted') {
          canInstall.value = false
          isInstalled.value = true
        }
        deferredPrompt = null
      } catch (err) {
        console.warn('Install prompt error:', err)
      }
    } else if (isIos.value) {
      showIosInstructions.value = true
    }
  }

  const dismissInstall = () => {
    canInstall.value = false
    showIosInstructions.value = false
    installDismissed.value = true
    try {
      sessionStorage.setItem('kana_pwa_install_dismissed', 'true')
    } catch (e) {}
  }

  onMounted(() => {
    if (typeof window === 'undefined') return

    // Check if already installed
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true
    isInstalled.value = isStandalone

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent)
    isIos.value = isIosDevice && !isStandalone

    // Check if user previously dismissed install prompt in this session
    try {
      if (sessionStorage.getItem('kana_pwa_install_dismissed') === 'true') {
        installDismissed.value = true
      }
    } catch (e) {}

    // Listen for beforeinstallprompt (Chrome / Android / Edge)
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e as BeforeInstallPromptEvent
      if (!installDismissed.value && !isInstalled.value) {
        canInstall.value = true
      }
    })

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      canInstall.value = false
      isInstalled.value = true
      deferredPrompt = null
    })

    // Register service worker
    registerServiceWorker()
  })

  return {
    needRefresh: readonly(needRefresh),
    canInstall: readonly(canInstall),
    isInstalled: readonly(isInstalled),
    isIos: readonly(isIos),
    showIosInstructions,
    updateServiceWorker,
    dismissUpdate,
    installApp,
    dismissInstall
  }
}
