import * as S from './styles'

import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  sliderColor?: 'white' | 'black'
}

const ShowCase = ({
  title,
  highlight,
  games,
  sliderColor = 'white',
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading leftLine lineColor="secondary" color="white">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={sliderColor} />}
  </S.Wrapper>
)

export default ShowCase
