import de from '@/lang/de-DE.json'
import en from '@/lang/en-GB.json'
import ko from '@/lang/ko-KR.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: { de, en, ko },
}))
