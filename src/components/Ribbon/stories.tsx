import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from './'

export default {
  title: 'Ribbon',
  component: Ribbon,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story<RibbonProps> = args => <Ribbon {...args} />

Default.args = {
  children: 'Best Seller',
}
