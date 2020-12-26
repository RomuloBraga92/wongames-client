import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      recommendedHighlight: highlightMock,
      recommendedGames: gamesMock,
      games: gamesMock,
    },
  }
}
