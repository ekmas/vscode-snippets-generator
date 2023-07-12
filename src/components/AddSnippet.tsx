import { useState, useCallback } from 'react'
import SnippetProperty from './SnippetProperty'
import { Editor } from '@monaco-editor/react'

export default function AddSnippet() {
  const [snippet, setSnippet] = useState({
    name: '',
    tabTrigger: '',
    description: '',
    snippet: '',
  })

  const updateSnippetProperty = useCallback(
    (propertyName: string, value: string) => {
      setSnippet((prev) => ({
        ...prev,
        [propertyName]: value,
      }))
    },
    []
  )

  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr] gap-3 mb-3">
        <SnippetProperty
          name="Name"
          propertyName="name"
          updateValue={updateSnippetProperty}
          value={snippet.name}
        />
        <SnippetProperty
          name="Tab trigger"
          propertyName="tabTrigger"
          updateValue={updateSnippetProperty}
          value={snippet.tabTrigger}
        />
      </div>
      <SnippetProperty
        name="Description"
        propertyName="description"
        updateValue={updateSnippetProperty}
        value={snippet.description}
      />
      <div className="h-[300px] mt-3">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
          }}
          onChange={(value) =>
            updateSnippetProperty('snippet', value as string)
          }
        />
      </div>
    </div>
  )
}
