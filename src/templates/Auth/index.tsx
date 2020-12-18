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
      <Logo />

      <Heading size="huge" color="white">
        All your favorite games in one place
      </Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>

      <S.BannerFooter>
        Won Games 2020 © Todos os Direitos Reservados
      </S.BannerFooter>
    </S.BannerSide>

    <S.Content>
      <Logo color="black" size="large" />

      <Heading size="medium" lineColor="secondary" leftLine>
        {title}
      </Heading>

      <S.ContentForm>{children}</S.ContentForm>
    </S.Content>
  </S.Container>
)

export default Auth
