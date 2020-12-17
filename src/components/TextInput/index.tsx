import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextInputProps = {
  label?: string
  labelFor?: string
  initialValue?: string
  onText?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  label,
  labelFor = '',
  initialValue = '',
  onText,
  ...props
}: TextInputProps) => {
  const [text, setText] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setText(newValue)

    if (onText) {
      onText(newValue)
    }
  }

  return (
    <S.Container>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputContainer>
        <S.Input
          id={labelFor}
          type="text"
          value={text}
          onChange={onChange}
          {...props}
        />
      </S.InputContainer>
    </S.Container>
  )
}

export default TextInput
