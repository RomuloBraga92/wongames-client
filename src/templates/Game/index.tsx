import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import TextContent from 'components/TextContent'
import ShowCase from 'components/ShowCase'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { GameCardProps } from 'components/GameCard'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingHighlight: HighlightProps
  upcomingGames: GameCardProps[]
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingHighlight,
  upcomingGames,
  recommendedGames,
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <ShowCase
        title="Upcoming"
        highlight={upcomingHighlight}
        games={upcomingGames}
      />

      <ShowCase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
