type Props = {
  name: string
  propertyName: string
  updateValue: (propertyName: string, value: string) => void
  value: string
}

export default function SnippetProperty({
  name,
  propertyName,
  updateValue,
  value,
}: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    updateValue(propertyName, value)
  }

  return (
    <input
      className="w-full outline-0 p-3 bg-editorBg text-white"
      type="text"
      placeholder={name}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  )
}
