import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Container>
    {items.map(item => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Container>
)

export default CartList
