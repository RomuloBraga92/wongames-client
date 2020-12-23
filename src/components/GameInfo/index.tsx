import {
  AddShoppingCart,
  FavoriteBorder,
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Container>
    <Heading bottomLine lineColor="primary" color="black" size="medium">
      {title}
    </Heading>

    <S.Description>{description}</S.Description>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.ButtonsContainer>
      <Button size="medium" icon={<AddShoppingCart />}>
        Add to cart
      </Button>
      <Button minimal icon={<FavoriteBorder />} size="medium">
        Wishlist
      </Button>
    </S.ButtonsContainer>
  </S.Container>
)

export default GameInfo
