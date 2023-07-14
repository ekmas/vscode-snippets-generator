import languages from '../languages.json'
import Language from './Language'

type Props = {
  language: string
  setLanguage: (language: string) => void
  active: boolean
  setIsActive: (active: boolean) => void
}

export default function LanguagesModal({
  language,
  setLanguage,
  active,
  setIsActive,
}: Props) {
  return (
    <div
      className={
        active
          ? 'z-20 fixed top-0 left-0 w-screen h-full flex items-center justify-center backdrop-blur-sm transition-all opacity-100 visible'
          : 'z-20 fixed top-0 left-0 w-screen h-full flex items-center justify-center transition-all opacity-0 invisible'
      }
    >
      <div className="w-[500px] h-min bg-editorBg text-center p-5 text-white border border-white/50">
        <h2 className="text-2xl">Choose language</h2>

        <div className="grid grid-cols-2 mt-6 overflow-y-scroll  h-[380px] languages-modal">
          {languages.map((lang) => {
            return (
              <Language
                key={lang.lang}
                activeLanguage={language}
                thisLang={lang.lang}
                iconClass={lang.iconClass}
                setLanguage={setLanguage}
              />
            )
          })}
        </div>
        <div className="pt-5">
          <button
            type="button"
            onClick={() => {
              setIsActive(false)
            }}
            className="bg-primaryBlue hover:bg-secondaryBlue transition-colors px-5 py-1.5"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}
