import { FavoriteBorder } from '@styled-icons/material-outlined'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from 'components/Button'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Container>
    <S.ImgContainer>
      <img src={img} alt={title} />
    </S.ImgContainer>

    <S.Content>
      <S.InfoContent>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.InfoContent>

      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist" />
      </S.FavButton>

      <S.BuyBox>
        <S.Price>{price}</S.Price>
        <Button size="small" icon={<AddShoppingCart />} />
      </S.BuyBox>
    </S.Content>
  </S.Container>
)

export default GameCard
