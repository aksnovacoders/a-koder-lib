import { TextareaHTMLAttributes } from 'react'

const Textarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea {...props} />
}

export default Textarea
