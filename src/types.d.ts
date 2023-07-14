export type Snippet = {
  name: string
  tabTrigger: string
  description: string
  snippet: string
}

export type SetSnippets = React.Dispatch<React.SetStateAction<Snippet[]>>
