import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from './'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Red Dead Redemption II',
    developer: 'Rockstar Games',
    img: '/img/gamecard-img.png',
    price: 'R$ 215,00',
  },
} as Meta

export const Default: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
