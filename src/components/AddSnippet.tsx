import { useState, useCallback, useEffect } from 'react'
import SnippetProperty from './SnippetProperty'
import { Editor } from '@monaco-editor/react'
import ChangeLanguage from './ChangeLanguage'
import { Snippet } from '../types'
import { Button } from './Button'
import clsx from 'clsx'

type Props = {
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>
  setActiveSnippet: React.Dispatch<React.SetStateAction<Snippet | null>>
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  activeSnippet: Snippet | null
  snippets: Snippet[]
  isEditing: boolean
}

export default function AddSnippet({
  setSnippets,
  activeSnippet,
  setActiveSnippet,
  snippets,
  isEditing,
  setIsEditing,
}: Props) {
  const [snippet, setSnippet] = useState<Snippet>({
    name: '',
    tabTrigger: '',
    description: '',
    snippet: '',
    uuid: crypto.randomUUID(),
  })

  useEffect(() => {
    if (activeSnippet) {
      setSnippet(activeSnippet)

      if (activeSnippet.name && activeSnippet.tabTrigger) {
        setIsEditing(true)
      }
    }
  }, [activeSnippet])

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

    if (isEditing) {
      const snippetsCopy = [...snippets]
      const oldSnippet = snippetsCopy.find(
        (x) => x.uuid === activeSnippet?.uuid
      )

      const oldSnippetIndex = snippetsCopy.findIndex(
        (x) => x.uuid === oldSnippet?.uuid
      )

      snippetsCopy[oldSnippetIndex] = snippet
      setSnippets(snippetsCopy)

      setActiveSnippet(null)
      setIsEditing(false)
    } else {
      setSnippets((prevSnippets) => [...prevSnippets, snippet])
    }

    setSnippet({
      name: '',
      tabTrigger: '',
      description: '',
      snippet: '',
      uuid: crypto.randomUUID(),
    })
  }

  const cancelEditing = () => {
    setActiveSnippet(null)
    setIsEditing(false)

    setSnippet({
      name: '',
      tabTrigger: '',
      description: '',
      snippet: '',
      uuid: crypto.randomUUID(),
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

        <div
          className={clsx(
            'grid',
            isEditing ? 'grid-cols-2 gap-3' : 'grid-cols-1'
          )}
        >
          <Button type="submit" className="py-2 w-full mt-3 text-white">
            {isEditing ? 'Save' : 'Add new snippet'}
          </Button>
          {isEditing && (
            <Button
              onClick={cancelEditing}
              type="button"
              className="py-2 w-full mt-3 text-white bg-primaryRed hover:bg-secondaryRed"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
