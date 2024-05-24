import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ title, ...props }: ButtonProps) => {
  return <button {...props}>{title}</button>
}
