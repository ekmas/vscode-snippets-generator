type Props = {
  noSnippetsYet: boolean
  editorValue: string
}

export default function CopyBtn({ noSnippetsYet, editorValue }: Props) {
  const handleCopySnippets = () => {
    navigator.clipboard
      .writeText(editorValue)
      .then(() => {
        console.log('Value copied to clipboard')
      })
      .catch((error) => {
        console.error('Failed to copy value:', error)
      })
  }

  return (
    <button
      onClick={handleCopySnippets}
      className={
        noSnippetsYet
          ? 'bg-gray cursor-not-allowed transition-all mt-3 text-white w-full px-5 py-2'
          : 'bg-primaryBlue transition-all mt-3 text-white w-full hover:bg-secondaryBlue px-5 py-2'
      }
    >
      Copy snippets
    </button>
  )
}
