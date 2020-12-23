import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo, { GameInfoProps } from './'
import gameMock from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: gameMock,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
    <GameInfo {...args} />
  </div>
)
