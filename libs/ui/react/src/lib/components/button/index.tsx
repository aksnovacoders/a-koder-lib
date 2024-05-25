import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ title, ...props }: ButtonProps) => {
  return <button {...props}>{title}</button>
}

export default Button
