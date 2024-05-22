import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, ...props }: ButtonProps) {
  return <button {...props}>{title}</button>
}
