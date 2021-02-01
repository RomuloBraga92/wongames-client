import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon, { CartIconProps } from './'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta

export const Default: Story = () => <CartIcon />

export const WithBadge: Story<CartIconProps> = args => <CartIcon {...args} />

WithBadge.args = {
  quantity: 3,
}
