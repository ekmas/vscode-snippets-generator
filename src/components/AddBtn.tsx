import { SetSnippets, Snippet } from '../types'

type Props = {
  setSnippets: SetSnippets
  snippet: Snippet
}

export default function AddBtn({ setSnippets, snippet }: Props) {
  const addSnippet = () => {
    setSnippets((prevSnippets) => [...prevSnippets, snippet])
  }

  return (
    <button
      onClick={addSnippet}
      className="bg-primaryBlue transition-all hover:bg-secondaryBlue px-5 py-2 w-full mt-3 text-white"
    >
      Add new snippet
    </button>
  )
}
