'use client';

import { useEffect } from 'react';

// Расширяем интерфейс window, чтобы TS не ругался на отсутствие google
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // 1. Очистка куки, чтобы сбросить автоматический перевод при входе
    const resetGoogleCookie = () => {
      const domain = window.location.hostname;
      const cookieNames = ['googtrans', 'googtrans_old'];
      
      cookieNames.forEach(name => {
        document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        document.cookie = `${name}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        document.cookie = `${name}=; path=/; domain=.${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
      });
    };

    resetGoogleCookie();

    const hideBanners = () => {
      const iframe = document.querySelector<HTMLIFrameElement>('iframe.goog-te-banner-frame, iframe.skiptranslate');
      if (iframe) {
        iframe.style.setProperty('display', 'none', 'important');
        iframe.style.setProperty('visibility', 'hidden', 'important');
      }

      const elementsToHide = [
        '.goog-te-gadget-icon', 
        '#goog-gt-tt', 
        '.goog-tooltip.skiptranslate', 
        '.activity-root', 
        '.status-message', 
        '.started-activity-container'
      ];

      elementsToHide.forEach(selector => {
        const el = document.querySelector(selector) as HTMLElement;
        if (el) el.style.setProperty('display', 'none', 'important');
      });

      document.body.style.top = '0px';
    };

    // Оптимизированный наблюдатель
    const observer = new MutationObserver((mutations) => {
      // Чтобы не зацикливаться, проверяем, не мы ли изменили стиль
      const isRelevantChange = mutations.some(m => m.addedNodes.length > 0 || m.target.nodeName === 'IFRAME');
      if (isRelevantChange) {
        hideBanners();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'ru',
              includedLanguages: 'en',
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = hideBanners;
      document.body.appendChild(script);
    }

    hideBanners();

    return () => {
      observer.disconnect();
      // Опционально: сбрасываем при уходе с сайта, если нужно
      // resetGoogleCookie(); 
    };
  }, []);

  return <div id="google_translate_element" style={{ display: 'none' }}></div>;
}