import { useState } from 'react'
import AddSnippet from './AddSnippet'
import { Snippet } from '../types'
import CopySnippets from './CopySnippets'

export default function Main() {
  const [snippets, setSnippets] = useState<Snippet[]>([])

  return (
    <div className="w-[1300px] mx-auto min-h-[calc(100vh-225px-112px)] flex flex-col justify-center items-center">
      <div className="w-full gap-10 px-5 grid grid-cols-2 h-full">
        <AddSnippet setSnippets={setSnippets} />
        <CopySnippets snippets={snippets} />
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
