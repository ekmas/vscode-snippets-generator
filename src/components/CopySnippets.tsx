import type { Snippet } from '../types'
import CopyBtn from './CopyBtn'
import SnippetItem from './SnippetItem'

type Props = {
  snippets: Snippet[]
  setActiveSnippet: React.Dispatch<React.SetStateAction<Snippet | null>>
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>
  isEditing: boolean
}

export default function CopySnippets({
  snippets,
  setSnippets,
  setActiveSnippet,
  isEditing,
}: Props) {
  const snippetsValue = `{
${snippets
  .map((snippet) => {
    const lines = snippet.snippet.split('\n')

    const snippetLines = lines
      .map((line, index) => {
        const isLastElement = index === lines.length - 1
        let modifiedLine = line.split('\r')[0]

        if (modifiedLine.includes('"')) {
          modifiedLine = modifiedLine.replace(/"/g, "'")
        }

        // Check if the line contains a double quote and replace it with single quote because it
        // will interrupt json's double quote and it will show syntax

        return `"${modifiedLine}"${!isLastElement ? ',' : ''}`
      })
      .join('\n')

    const snippetTemplate = `${snippetLines.split('\n').join('\n      ')}`

    return `  "${snippet.name}": {
    "prefix": "${snippet.tabTrigger}",
    "body": [
      ${snippetTemplate}
    ],
    "description": "${snippet.description}"
  }`
  })
  .join(',\n')}
}`

  const noSnippetsYet = snippets.length === 0

  return (
    <div className="h-[548px] w900:h-[352px] w550:h-[252px] w400:h-[202px]">
      <div className="h-[calc(100%-52px)] p-5 bg-editorBg">
        {noSnippetsYet ? (
          <div className="text-white h-full flex items-center justify-center">
            When you add snippets, they will appear here.
          </div>
        ) : (
          <div className="overflow-y-auto pr-4 w450:pr-0 thin-scrollbar h-full">
            {snippets.map((snippet, index) => {
              return (
                <SnippetItem
                  key={index}
                  index={index}
                  setActiveSnippet={setActiveSnippet}
                  setSnippets={setSnippets}
                  snippet={snippet}
                  snippets={snippets}
                  isEditing={isEditing}
                />
              )
            })}
          </div>
        )}
      </div>

      <CopyBtn noSnippetsYet={noSnippetsYet} editorValue={snippetsValue} />
    </div>
  )
}
