'use client';

import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
     // Сбрасываем googtrans cookie
    document.cookie =
      'googtrans=; path=/; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    // Если есть старый cookie для поддомена
  document.cookie =
        'googtrans=; path=/; domain=.' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // 🔹 Функция скрытия всех баннеров и тултипов Google
    const hideBanners = () => {
      // iframe баннера
      const iframe = document.querySelector<HTMLIFrameElement>('iframe.goog-te-banner-frame, iframe.skiptranslate');
      if (iframe) {
        iframe.style.display = 'none';
        iframe.style.opacity = '0';
        iframe.style.pointerEvents = 'none';
        iframe.style.width = '0';
        iframe.style.height = '0';
      }

      // тултипы и всплывающие элементы
      const elems = document.querySelectorAll(
        '.goog-te-gadget-icon, #goog-gt-tt, .goog-tooltip.skiptranslate, .activity-root, .status-message, .started-activity-container'
      );
      elems.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });

      // body top fix
      document.body.style.top = '0px';
    };

    // 🔹 MutationObserver для динамически появляющихся элементов
    const observer = new MutationObserver(hideBanners);
    observer.observe(document.body, { childList: true, subtree: true });

    // 🔹 Добавляем Google Translate скрипт только один раз
    if (!document.getElementById('google-translate-script')) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'ru',
            includedLanguages: 'en',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = hideBanners; // скрываем баннер сразу после загрузки скрипта
      document.body.appendChild(script);
    }

    // 🔹 Дополнительно вызываем один раз сразу
    hideBanners();

    // 🔹 Очистка при размонтировании
    return () => observer.disconnect();
  }, []);

  return <div id="google_translate_element" style={{ display: 'none' }}></div>;
}
