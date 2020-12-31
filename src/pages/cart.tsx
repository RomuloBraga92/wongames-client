import Cart, { CartTemplateProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import hightlightMock from 'components/Highlight/mock'
import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: hightlightMock,
      items: itemsMock,
      total: 'R$ 430,00',
      cards: cardsMock,
    },
  }
}
