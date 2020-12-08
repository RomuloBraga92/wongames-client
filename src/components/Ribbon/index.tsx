import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small' | 'large'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => (
  <S.Container color={color} size={size}>
    {children}
  </S.Container>
)

export default Ribbon
