import * as S from './styles'

export type LineColor = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  size?: 'small' | 'medium' | 'huge'
  lineColor?: LineColor
  leftLine?: boolean
  bottomLine?: boolean
}

const Heading = ({
  children,
  color = 'black',
  size = 'medium',
  leftLine = false,
  bottomLine = false,
  lineColor = 'primary',
}: HeadingProps) => (
  <S.Container
    color={color}
    size={size}
    lineColor={lineColor}
    leftLine={leftLine}
    bottomLine={bottomLine}
  >
    {children}
  </S.Container>
)

export default Heading
