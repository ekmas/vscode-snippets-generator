import { useState, useCallback } from 'react'
import SnippetProperty from './SnippetProperty'
import { Editor } from '@monaco-editor/react'
import ChangeLanguage from './ChangeLanguage'
import { Snippet, SetSnippets } from '../types'
import AddBtn from './AddBtn'

type Props = {
  setSnippets: SetSnippets
}

export default function AddSnippet({ setSnippets }: Props) {
  const [snippet, setSnippet] = useState<Snippet>({
    name: '',
    tabTrigger: '',
    description: '',
    snippet: '// your snippet',
  })

  const [language, setLanguage] = useState('unset')

  const updateSnippetProperty = useCallback(
    (propertyName: string, value: string) => {
      setSnippet((prev) => ({
        ...prev,
        [propertyName]: value,
      }))
    },
    []
  )

  const addSnippet = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setSnippets((prevSnippets) => [...prevSnippets, snippet])

    setSnippet({
      name: '',
      tabTrigger: '',
      description: '',
      snippet: '',
    })
  }

  return (
    <div>
      <form onSubmit={addSnippet}>
        <div className="grid grid-cols-[1fr_1fr] w550:grid-cols-1 gap-3 mb-3">
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
        <div className="h-[300px] w550:h-[200px] w400:h-[150px] mt-3">
          <Editor
            height="100%"
            theme="vs-dark"
            language={language}
            value={snippet.snippet}
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

        <ChangeLanguage language={language} setLanguage={setLanguage} />

        <AddBtn />
      </form>
    </div>
  )
}
