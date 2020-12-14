import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  as?: React.ElementType
  minimal?: boolean
} & ButtonTypes

const Button = ({
  children,
  size = 'large',
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Container
    size={size}
    hasIcon={!!icon}
    fullWidth={fullWidth}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Container>
)

export default Button
