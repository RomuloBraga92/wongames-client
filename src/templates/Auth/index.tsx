import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Container>
    <S.BannerSide>
      <S.BannerContainer>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge" color="white">
            All your favorite games in one place
          </Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>

        <S.BannerFooter>
          Won Games 2020 © Todos os Direitos Reservados
        </S.BannerFooter>
      </S.BannerContainer>
    </S.BannerSide>

    <S.Content>
      <S.ContentContainer>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>

        <Heading size="medium" lineColor="secondary" leftLine>
          {title}
        </Heading>

        <S.ContentForm>{children}</S.ContentForm>
      </S.ContentContainer>
    </S.Content>
  </S.Container>
)

export default Auth
