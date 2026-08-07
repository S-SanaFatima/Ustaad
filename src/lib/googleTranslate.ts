declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

let isScriptLoaded = false;
let isInitialized = false;
let fieldCounter = 0;

/** Remove labels injected for Google Translate (legacy patches left stale for/id pairs). */
function removeInjectedTranslateLabels(): void {
  document
    .querySelectorAll<HTMLLabelElement>(
      'label[data-gt-a11y="true"], label[for^="google-translate"], label[id^="google-translate-"][id$="-label"]'
    )
    .forEach((label) => label.remove());
}

/** Ensure Google Translate injected fields have id, name, and aria-label (no <label for> — GT replaces nodes and breaks for/id pairing). */
export function patchGoogleTranslateFields(root: ParentNode = document): void {
  removeInjectedTranslateLabels();

  const selectors = [
    '.goog-te-combo',
    '#google_translate_element select',
    '#google_translate_element input',
    '.skiptranslate select',
    '.skiptranslate input',
  ].join(', ');

  root.querySelectorAll<HTMLSelectElement | HTMLInputElement>(selectors).forEach((field) => {
    const tag = field.tagName.toLowerCase();

    if (!field.id) {
      field.id = field.classList.contains('goog-te-combo')
        ? 'google-translate-language'
        : `google-translate-field-${++fieldCounter}`;
    }
    if (!field.getAttribute('name')) {
      field.setAttribute('name', field.id.replace(/-/g, '_'));
    }
    if (tag === 'select') {
      field.setAttribute('aria-label', 'Select language');
    }
  });
}

export function observeGoogleTranslateFields(): () => void {
  patchGoogleTranslateFields(document);

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          patchGoogleTranslateFields(node);
        }
      });
    }
    patchGoogleTranslateFields(document);
  });

  observer.observe(document.body, { childList: true, subtree: true });
  return () => observer.disconnect();
}

export function loadGoogleTranslate(): void {
  if (isScriptLoaded) return;

  const script = document.createElement('script');
  script.id = 'gt-script';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
  isScriptLoaded = true;

  window.googleTranslateElementInit = function () {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'en',
        includedLanguages: 'en,ar,fr,de,es,hi,ur,zh-CN',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      'google_translate_element'
    );
    isInitialized = true;
    patchGoogleTranslateFields(document);
  };
}

export function changeLanguage(langCode: string): void {
  if (!isInitialized) {
    const checkInterval = setInterval(() => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        clearInterval(checkInterval);
        selectElement.value = langCode;
        selectElement.dispatchEvent(new Event('change'));
      }
    }, 100);
    setTimeout(() => clearInterval(checkInterval), 10000);
    return;
  }

  const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  if (selectElement) {
    selectElement.value = langCode;
    selectElement.dispatchEvent(new Event('change'));
  }
}

export function getCurrentLanguage(): string {
  const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
  return selectElement ? selectElement.value : 'en';
}

export function setStoredLanguage(langCode: string): void {
  localStorage.setItem('preferredLanguage', langCode);
}

export function getStoredLanguage(): string | null {
  return localStorage.getItem('preferredLanguage');
}
