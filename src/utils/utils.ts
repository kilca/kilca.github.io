import { LocaleString, SupportedLang } from '@/store';
import { ref, computed } from 'vue';

const currentLanguage = ref<SupportedLang>('fr'); // Default language is English

export function setLanguage(language : SupportedLang) {
  currentLanguage.value = language;
}

export const tr = (content : LocaleString | string | undefined) => {
  return computed(() => {
    if (typeof content === 'string') {
      return content;
    }
    if (!content) {
      return '';
    }
    return content[currentLanguage.value] || content['en'];
  }); // Default to English
};