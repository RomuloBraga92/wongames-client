import Link from 'next/link'

import * as S from './styles'
import Logo from 'components/Logo'
import Heading from 'components/Heading'

const Footer = () => (
  <S.Container>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading bottomLine lineColor="secondary" color="black" size="small">
          Contact
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading bottomLine lineColor="secondary" color="black" size="small">
          Follow Us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading bottomLine lineColor="secondary" color="black" size="small">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-location">
        <Heading bottomLine lineColor="secondary" color="black" size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
  </S.Container>
)

export default Footer
