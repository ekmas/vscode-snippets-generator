import { useState, useEffect } from 'react'
import AddSnippet from './AddSnippet'
import { Snippet } from '../types'

export default function Main() {
  const [snippets, setSnippets] = useState<Snippet[]>([])

  return (
    <div className="w-[1300px] mx-auto gap-10 px-5 grid grid-cols-2">
      <AddSnippet setSnippets={setSnippets} />
    </div>
  )
}
