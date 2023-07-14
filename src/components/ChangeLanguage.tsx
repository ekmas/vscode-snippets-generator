import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import LanguagesModal from './LanguagesModal'

type Props = {
  language: string
  setLanguage: (language: string) => void
}

export default function ChangeLanguage({ language, setLanguage }: Props) {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between mt-3 bg-editorBg p-3">
        <p className="text-white font-medium">Language:</p>

        <button
          type="button"
          onClick={() => {
            setIsModalActive(true)
          }}
          className="bg-darkerGray hover:bg-darkGray transition-colors text-white px-4 py-2 font-medium flex items-center"
        >
          {language}
          <BsChevronDown className="ml-3" />
        </button>
      </div>
      <LanguagesModal
        language={language}
        setLanguage={setLanguage}
        active={isModalActive}
        setIsActive={setIsModalActive}
      />
    </>
  )
}
