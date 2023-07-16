import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <div className="max-w-container w-full p-container mx-auto">
        <div className="flex flex-col items-center mx-auto w-max py-5">
          <img className="w-20 w550:w-14" src={logo} alt="vscode logo" />

          <h1 className="text-white text-[30px] w550:text-[25px] mt-5 font-thin">
            Snippets generator
          </h1>
        </div>
      </div>
    </header>
  )
}
