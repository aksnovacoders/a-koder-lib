import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ title, style, ...props }: ButtonProps) => {
  return (
    <button style={{ backgroundColor: 'red', ...style }} {...props}>
      {title}
    </button>
  )
}
