import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: 'red' }} {...props}>
      {title}
    </button>
  )
}
