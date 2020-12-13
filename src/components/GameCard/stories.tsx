import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from './'
import item from './mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: { ...item },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const withRibbon: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

withRibbon.args = {
  ribbon: '8.5% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
}
