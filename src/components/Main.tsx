import { useState } from 'react'
import AddSnippet from './AddSnippet'
import { Snippet } from '../types'
import CopySnippets from './CopySnippets'

export default function Main() {
  const [snippets, setSnippets] = useState<Snippet[]>([])

  return (
    <div className="min-h-[calc(100vh-225px-112px)] flex justify-center items-center">
      <div className="w-[1300px] mx-auto gap-10 px-5 grid grid-cols-2 h-full">
        <AddSnippet setSnippets={setSnippets} />
        <CopySnippets snippets={snippets} />
      </div>
    </div>
  )
}
