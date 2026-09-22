<template>
  <div class="pwa-container">
    <!-- 1. Content Update Notification Banner -->
    <Transition name="slide-up">
      <div v-if="needRefresh" class="pwa-banner update-banner" role="alert">
        <button @click="dismissUpdate" class="banner-corner-close" :aria-label="t('pwa.dismiss')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="banner-icon-wrap update-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
          </svg>
        </div>
        <div class="banner-content">
          <div class="banner-title">{{ t('pwa.updateTitle') }}</div>
          <div class="banner-desc">{{ t('pwa.updateDesc') }}</div>
        </div>
        <div class="banner-actions">
          <button @click="updateServiceWorker" class="pwa-btn primary">
            {{ t('pwa.updateBtn') }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- 2. Add to Homescreen Banner -->
    <Transition name="slide-up">
      <div v-if="canInstall && !needRefresh" class="pwa-banner install-banner" role="region" aria-label="Install App">
        <button @click="dismissInstall" class="banner-corner-close" :aria-label="t('pwa.dismiss')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <img src="/hero/image.webp" alt="Kana Learning" class="app-icon" />
        <div class="banner-content">
          <div class="banner-title">{{ t('pwa.installTitle') }}</div>
          <div class="banner-desc">{{ t('pwa.installDesc') }}</div>
        </div>
        <div class="banner-actions">
          <button @click="installApp" class="pwa-btn primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {{ t('pwa.installBtn') }}
          </button>
        </div>
      </div>
    </Transition>

    <!-- 3. iOS Instructions Modal -->
    <Transition name="fade">
      <div v-if="showIosInstructions" class="ios-modal-overlay" @click="showIosInstructions = false">
        <div class="ios-modal" @click.stop>
          <div class="ios-modal-header">
            <img src="/hero/image.webp" alt="Kana Learning" class="ios-app-icon" />
            <div>
              <h3>{{ t('pwa.installTitle') }}</h3>
              <p>Safari iOS</p>
            </div>
            <button @click="showIosInstructions = false" class="close-btn" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="ios-steps">
            <div class="ios-step">
              <div class="step-num">1</div>
              <div class="step-text">
                Tap the <strong>Share</strong> button
                <svg class="inline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                  <polyline points="16 6 12 2 8 6"/>
                  <line x1="12" y1="2" x2="12" y2="15"/>
                </svg>
                at the bottom of Safari.
              </div>
            </div>
            <div class="ios-step">
              <div class="step-num">2</div>
              <div class="step-text">
                Scroll down and select <strong>"Add to Home Screen"</strong>
                <svg class="inline-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>.
              </div>
            </div>
          </div>
          <button @click="showIosInstructions = false" class="pwa-btn primary full-width">
            OK
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { usePwa } from '../composables/usePwa'
import { useI18n } from '../composables/useI18n'

const {
  needRefresh,
  canInstall,
  showIosInstructions,
  updateServiceWorker,
  dismissUpdate,
  installApp,
  dismissInstall
} = usePwa()

const { t } = useI18n()
</script>

<style scoped>
.pwa-container {
  position: fixed;
  z-index: 2000;
  bottom: 24px;
  right: 24px;
  max-width: 440px;
  width: calc(100% - 48px);
  pointer-events: none;
}

.pwa-banner {
  position: relative;
  pointer-events: auto;
  background: #ffffff;
  border-radius: 18px;
  padding: 1.15rem 1.25rem;
  padding-right: 2.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 12px 36px rgba(139, 69, 19, 0.2), 0 2px 8px rgba(139, 69, 19, 0.08);
  border: 1.5px solid rgba(139, 69, 19, 0.15);
  backdrop-filter: blur(10px);
}

.banner-corner-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B4513;
  background: rgba(139, 69, 19, 0.08);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 5;
}

.banner-corner-close:hover {
  background: rgba(139, 69, 19, 0.18);
  color: #5c3a21;
  transform: scale(1.08);
}

.update-banner {
  border-left: 5px solid #22c55e;
}

.install-banner {
  border-left: 5px solid var(--chocolate-primary, #8B4513);
}

.banner-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.update-icon {
  background: rgba(34, 197, 94, 0.12);
  color: #16a34a;
}

.app-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.banner-content {
  flex: 1;
  min-width: 0;
}

.banner-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: #8B4513;
  line-height: 1.25;
  margin-bottom: 0.2rem;
}

.banner-desc {
  font-size: 0.8rem;
  color: #5c3a21;
  line-height: 1.35;
  opacity: 0.9;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.pwa-btn {
  padding: 0.55rem 1rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;
}

.pwa-btn.primary {
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: #F5F5DC;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.25);
}

.pwa-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(139, 69, 19, 0.35);
}

.pwa-btn.text {
  background: transparent;
  color: #8B4513;
  padding: 0.55rem 0.65rem;
  opacity: 0.8;
}

.pwa-btn.text:hover {
  opacity: 1;
}

.close-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8B4513;
  background: rgba(139, 69, 19, 0.08);
  cursor: pointer;
  transition: background 0.2s ease;
}

.close-btn:hover {
  background: rgba(139, 69, 19, 0.16);
}

/* iOS Modal */
.ios-modal-overlay {
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 2100;
}

.ios-modal {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem;
  max-width: 380px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(139, 69, 19, 0.15);
}

.ios-modal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.ios-app-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
}

.ios-modal-header h3 {
  font-size: 1.1rem;
  color: #8B4513;
  font-weight: 700;
  line-height: 1.2;
}

.ios-modal-header p {
  font-size: 0.8rem;
  color: #A0522D;
}

.ios-modal-header .close-btn {
  margin-left: auto;
}

.ios-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.ios-step {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #333;
}

.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #8B4513;
  color: #F5F5DC;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-text {
  line-height: 1.4;
}

.inline-icon {
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.2rem;
  color: #8B4513;
}

.full-width {
  width: 100%;
  justify-content: center;
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .pwa-container {
    bottom: calc(72px + env(safe-area-inset-bottom, 0px));
    left: 12px;
    right: 12px;
    width: calc(100% - 24px);
    max-width: none;
  }

  .pwa-banner {
    padding: 0.9rem 1rem;
    padding-right: 2.5rem;
    gap: 0.75rem;
  }

  .banner-corner-close {
    top: 8px;
    right: 8px;
    width: 26px;
    height: 26px;
  }

  .banner-actions {
    flex-direction: column;
    gap: 0.35rem;
  }

  .pwa-btn {
    padding: 0.45rem 0.85rem;
    font-size: 0.8rem;
  }
}
</style>
