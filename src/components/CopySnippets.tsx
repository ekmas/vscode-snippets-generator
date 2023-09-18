import { Editor } from '@monaco-editor/react'
import { Snippet } from '../types'
import CopyBtn from './CopyBtn'

export default function CopySnippets({ snippets }: { snippets: Snippet[] }) {
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
  const noSnippetsMessage = `{
  "msg1": "when you add snippets",
  "msg2": "they will appear here"
}`

  const noSnippetsYet = snippets.length === 0

  const editorValue = noSnippetsYet ? noSnippetsMessage : snippetsValue

  return (
    <div className="h-[548px] w900:h-[352px] w550:h-[252px] w400:h-[202px]">
      <Editor
        theme="vs-dark"
        language={'json'}
        height={'calc(100% - 52px)'}
        value={editorValue}
        options={{
          minimap: {
            enabled: false,
          },
          readOnly: true,
        }}
      />

      <CopyBtn noSnippetsYet={noSnippetsYet} editorValue={snippetsValue} />
    </div>
  )
}
