import { useState } from 'react'
import AddSnippet from './AddSnippet'
import { Snippet } from '../types'
import CopySnippets from './CopySnippets'

export default function Main() {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [activeSnippet, setActiveSnippet] = useState<Snippet | null>(null)

  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="max-w-container w-full mx-auto min-h-[calc(100vh-225px-112px)] flex flex-col justify-center items-center">
      <div className="w-full gap-10 px-5 grid grid-cols-2 w900:grid-cols-1 w900:w-[90%] w900:mx-auto h-full w400:w-full">
        <AddSnippet
          setSnippets={setSnippets}
          setActiveSnippet={setActiveSnippet}
          activeSnippet={activeSnippet}
          snippets={snippets}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
        <CopySnippets
          snippets={snippets}
          setActiveSnippet={setActiveSnippet}
          setSnippets={setSnippets}
          isEditing={isEditing}
        />
      </div>
      <div className="py-4">
        <a
          target="_blank"
          className="text-primaryBlue font-medium underline"
          href="https://code.visualstudio.com/docs/editor/userdefinedsnippets"
          rel="noreferrer"
        >
          VSCode Snippet Docs
        </a>
      </div>
    </div>
  )
}
