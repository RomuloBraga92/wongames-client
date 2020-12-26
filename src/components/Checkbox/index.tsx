import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label = 'label',
  labelFor = 'label',
  labelColor = 'white',
  isChecked = false,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked

    setChecked(status)

    {
      onCheck && onCheck(status)
    }
  }

  return (
    <S.Container>
      <S.Input
        id={labelFor}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Container>
  )
}

export default Checkbox
