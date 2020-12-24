import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from './'

import gameDetailsMock from 'components/GameDetails/mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: {
    platforms: gameDetailsMock.platforms,
    developer: gameDetailsMock.developer,
    releaseDate: gameDetailsMock.releaseDate,
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'mac', 'linux'],
      },
    },
  },
} as Meta

export const Default: Story<GameDetailsProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
