import { MouseEventHandler } from "react"

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick && onClick} className="border border-purple-600 rounded-2xl text-purple-600 px-4 py-1 hover:bg-purple-50 hover:ring-2 hover:ring-purple-200 transition active:bg-purple-100">
    {children}
  </button>
}

export default Button