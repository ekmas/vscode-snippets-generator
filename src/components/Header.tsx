import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <div className="w-container p-container mx-auto max-w-full">
        <div className="flex flex-col items-center mx-auto w-max py-5">
          <img src={logo} alt="vscode logo" width={80} />

          <h1 className="text-white text-[30px] mt-5 font-thin">
            Snippets generator
          </h1>
        </div>
      </div>
    </header>
  )
}
