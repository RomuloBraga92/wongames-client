import { Linux, Windows, Apple } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'

export type GameDetailsProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
}

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
}: GameDetailsProps) => {
  const platformsIcons = {
    windows: <Windows title="windows" size={18} />,
    linux: <Linux title="linux" size={18} />,
    mac: <Apple title="mac" size={18} />,
  }

  return (
    <S.Container>
      <MediaMatch greaterThan="small">
        <Heading leftLine lineColor="secondary" color="white">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developers</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconContainer>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformsIcons[icon]}</S.Icon>
            ))}
          </S.IconContainer>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2K</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Container>
  )
}

export default GameDetails
