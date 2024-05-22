import { ButtonHTMLAttributes } from 'react'

export default function Button({ title, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{title}</button>
}
