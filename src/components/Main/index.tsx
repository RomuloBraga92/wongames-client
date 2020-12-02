import * as S from './styles'

const Main = ({
  title = 'Next.JS Boilerplate',
  description = 'A boilerplate for your Next.JS application!',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/Development-pana.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
