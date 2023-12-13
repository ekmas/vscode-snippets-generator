import languages from '../languages.json'
import { Button } from './Button'
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
      <div className="w-[500px] mx-5 w550:w-[90%] w400:w-full h-min bg-editorBg text-center p-5 text-white border border-white/50">
        <h2 className="text-2xl w550:text-xl w450:text-lg w400:text-base">
          Choose language
        </h2>

        <div className="grid grid-cols-2 w450:grid-cols-1 mt-6 overflow-y-scroll px-5 h-[380px] h600:h-[250px] thin-scrollbar">
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
          <Button
            type="button"
            onClick={() => {
              setIsActive(false)
            }}
            className="py-1.5"
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  )
}
