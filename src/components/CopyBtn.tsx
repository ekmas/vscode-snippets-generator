import { useState } from 'react'
import CopyModal from './CopyModal'

type Props = {
  noSnippetsYet: boolean
  editorValue: string
}

export default function CopyBtn({ noSnippetsYet, editorValue }: Props) {
  const [isModalActive, setIsModalActive] = useState(false)
  const [isCopySuccessful, setIsCopySuccessful] = useState<boolean | null>(
    false
  )

  const handleCopySnippets = () => {
    navigator.clipboard
      .writeText(editorValue)
      .then(() => {
        setIsCopySuccessful(false)
      })
      .catch((error) => {
        setIsCopySuccessful(false)
      })

    setIsModalActive(true)
  }

  return (
    <>
      <button
        onClick={handleCopySnippets}
        disabled={noSnippetsYet}
        className={
          noSnippetsYet
            ? 'bg-gray cursor-not-allowed transition-all mt-3 text-white w-full px-5 py-2'
            : 'bg-primaryBlue transition-all mt-3 text-white w-full hover:bg-secondaryBlue px-5 py-2'
        }
      >
        Copy snippets
      </button>
      <CopyModal
        active={isModalActive}
        setIsActive={setIsModalActive}
        isCopySuccesful={isCopySuccessful}
      />
    </>
  )
}
