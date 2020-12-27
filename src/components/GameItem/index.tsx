import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

const GameItem = ({ img, title, price }: GameItemProps) => (
  <S.Container>
    <S.GameContent>
      <S.GameImage>
        <img src={img} alt={title} />
      </S.GameImage>

      <S.GameInfo>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.GameInfo>
    </S.GameContent>
  </S.Container>
)

export default GameItem
