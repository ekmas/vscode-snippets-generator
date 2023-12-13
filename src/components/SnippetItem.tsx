import React, { useEffect, useState } from 'react'
import { Snippet } from '../types'
import { FaEdit } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { Button } from './Button'
import clsx from 'clsx'

type Props = {
  index: number
  snippet: Snippet
  snippets: Snippet[]
  setActiveSnippet: React.Dispatch<React.SetStateAction<Snippet | null>>
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>
  isEditing: boolean
}

export default function SnippetItem({
  index,
  snippet,
  snippets,
  setActiveSnippet,
  setSnippets,
  isEditing,
}: Props) {
  const [localIsEditing, setLocalIsEditing] = useState(false)

  useEffect(() => {
    if (!isEditing) {
      setLocalIsEditing(false)
    }
  }, [isEditing])

  return (
    <div
      className="bg-darkerGray border border-white/10 transition-colors flex items-center pl-5 mb-[10px] justify-between"
      key={index}
    >
      <p className="text-white whitespace-nowrap overflow-hidden max-w-[70%] text-ellipsis">
        {snippet.name}
      </p>
      <div className="flex items-center">
        <Button
          onClick={() => {
            setLocalIsEditing(true)
            setActiveSnippet(snippets[index])
          }}
          className="relative w-12 h-12 bg-primaryBlue hover:bg-secondaryBlue transition-colors grid place-items-center"
        >
          <FaEdit className="fill-white w-5 h-5" />
        </Button>
        <Button
          onClick={() => {
            setSnippets(snippets.filter((x) => snippets.indexOf(x) !== index))
          }}
          className={clsx(
            'w-12 h-12 transition-colors grid place-items-center',
            localIsEditing
              ? 'bg-gray hover:bg-gray cursor-not-allowed'
              : 'bg-primaryRed hover:bg-secondaryRed'
          )}
          disabled={localIsEditing}
        >
          <IoClose className="fill-white w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
