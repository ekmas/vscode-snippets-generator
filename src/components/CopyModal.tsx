import { Editor } from '@monaco-editor/react'
import { Button } from './Button'

type Props = {
  active: boolean
  setIsActive: (active: boolean) => void
  isCopySuccesful: boolean | null
  editorValue: string
}

export default function CopyModal({
  active,
  setIsActive,
  isCopySuccesful,
  editorValue,
}: Props) {
  return (
    <div
      className={
        active
          ? 'z-20 fixed top-0 left-0 w-screen h-full flex items-center justify-center backdrop-blur-sm transition-all opacity-100 visible'
          : 'z-20 fixed top-0 left-0 w-screen h-full flex items-center justify-center transition-all opacity-0 invisible'
      }
    >
      <div className="w-[550px] mx-5 h-min bg-editorBg text-center p-5 text-white border border-white/50">
        <h2 className="text-2xl w550:text-xl w450:text-lg w400:text-base">
          {isCopySuccesful
            ? 'Snippets have been copied.'
            : "Your device doesn't support navigator api."}
        </h2>

        {!isCopySuccesful && (
          <>
            <p className="mt-6 leading-[1.8] text-[15px] w550:text-[13px] w400:text-[11px]">
              You&quot;ll have to click on the editor with snippets, select them
              all and copy them that way.
            </p>

            <div className="border mt-4 w-5/6 mx-auto border-white/50">
              <Editor
                theme="vs-dark"
                language={'json'}
                height={'150px'}
                value={editorValue}
                options={{
                  minimap: {
                    enabled: false,
                  },
                  readOnly: true,
                  fontSize: 12,
                }}
              />
            </div>
          </>
        )}

        <p className="my-6 leading-[1.8] text-[15px] w550:text-[13px] w400:text-[11px]">
          Now open VSCode and open command palette with <br />{' '}
          <b>Ctrl + Shift + P</b>. <br /> Search for &quot;Snippets: Configure
          User Snippets&quot; <br />
          Select snippet file for desired language (if desired language is not
          on the list either download extension for that language or place it in
          global snippet file) <br />
          After you opened snippet file, just delete everything and paste your
          snippets.
        </p>

        <Button
          type="button"
          onClick={() => {
            setIsActive(false)
          }}
          className="py-1.5"
        >
          Ok
        </Button>
      </div>
    </div>
  )
}
