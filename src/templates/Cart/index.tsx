import Base from 'templates/Base'

import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import * as S from './styles'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Empty from 'components/Empty'

export type CartTemplateProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartTemplateProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading leftLine lineColor="secondary" color="white">
          My cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />

        <ShowCase
          title="You may like these games"
          games={recommendedGames}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  )
}

export default Cart
