import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
  onCheck?: (value?: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    if (onCheck) {
      onCheck(value)
    }
  }

  return (
    <S.Container>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Container>
  )
}

export default Radio
