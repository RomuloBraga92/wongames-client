import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextInputProps = {
  label?: string
  initialValue?: string
  onText?: (value: string) => void
  icon?: JSX.Element
  iconSide?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextInput = ({
  label,
  initialValue = '',
  onText,
  icon,
  iconSide = 'left',
  disabled = false,
  error,
  name,
  ...props
}: TextInputProps) => {
  const [text, setText] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value
    setText(newValue)

    {
      onText && onText(newValue)
    }
  }

  return (
    <S.Container disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputContainer>
        {!!icon && <S.Icon iconSide={iconSide}>{icon}</S.Icon>}
        <S.Input
          type="text"
          value={text}
          onChange={onChange}
          iconSide={iconSide}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputContainer>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}

export default TextInput
