import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'

import * as S from './styles'

const Home = () => (
  <S.Container>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading leftLine lineColor="secondary" color="black">
        News{' '}
      </Heading>
    </Container>

    <Container>
      <Heading leftLine lineColor="secondary" color="white">
        Most Populars
      </Heading>
    </Container>

    <Container>
      <Heading leftLine lineColor="secondary" color="white">
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading leftLine lineColor="secondary" color="white">
        Free games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </S.Container>
)

export default Home
