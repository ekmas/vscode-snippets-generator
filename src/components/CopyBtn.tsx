import { useState } from 'react'
import CopyModal from './CopyModal'
import clsx from 'clsx'
import { Button } from './Button'

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
        setIsCopySuccessful(true)
      })
      .catch((error) => {
        setIsCopySuccessful(false)
      })

    setIsModalActive(true)
  }

  return (
    <>
      <Button
        onClick={handleCopySnippets}
        disabled={noSnippetsYet}
        className={clsx(
          'transition-all mt-3 text-white w-full px-5 py-2',
          noSnippetsYet
            ? 'bg-gray hover:bg-gray cursor-not-allowed'
            : 'bg-primaryBlue hover:bg-secondaryBlue'
        )}
      >
        Copy snippets
      </Button>
      <CopyModal
        active={isModalActive}
        setIsActive={setIsModalActive}
        isCopySuccesful={isCopySuccessful}
        editorValue={editorValue}
      />
    </>
  )
}
