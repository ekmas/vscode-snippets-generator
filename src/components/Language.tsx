type Props = {
  activeLanguage: string
  thisLang: string
  iconClass: string
  setLanguage: (language: string) => void
}

export default function Language({
  activeLanguage,
  thisLang,
  iconClass,
  setLanguage,
}: Props) {
  const isSelected = activeLanguage === thisLang

  return (
    <div className="flex items-center justify-center flex-col py-6">
      <i className={iconClass}></i>

      <h4 className="font-semibold text-xl w450:text-lg my-3">{thisLang}</h4>

      <button
        type="button"
        disabled={isSelected}
        className={
          isSelected
            ? 'bg-gray cursor-not-allowed transition-all px-5 py-1.5 w450:text-sm w450:px-4 w450:py-1'
            : 'bg-primaryBlue transition-all hover:bg-secondaryBlue px-5 py-1.5 w450:text-sm w450:px-4 w450:py-1'
        }
        onClick={() => {
          setLanguage(thisLang)
        }}
      >
        {isSelected ? 'Selected' : 'Select'}
      </button>
    </div>
  )
}
