import clsx from 'clsx'
import { Button } from './Button'

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

      <Button
        type="button"
        disabled={isSelected}
        className={clsx(
          'w450:text-sm w450:px-4 w450:py-1 py-1.5' && isSelected
            ? 'bg-gray hover:bg-gray cursor-not-allowed'
            : ''
        )}
        onClick={() => {
          setLanguage(thisLang)
        }}
      >
        {isSelected ? 'Selected' : 'Select'}
      </Button>
    </div>
  )
}
