import Base from 'templates/Base'

import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import ShowCase from 'components/ShowCase'
import { HighlightProps } from 'components/Highlight'
import GameCard, { GameCardProps } from 'components/GameCard'

//import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  games?: GameCardProps[]
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading leftLine lineColor="secondary" color="white">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist - ${index}`} {...game} />
        ))}
      </Grid>
    </Container>

    <ShowCase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
