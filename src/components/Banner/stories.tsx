import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'
import item from './mock'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: {
    ribbon: {
      type: 'string',
    },
  },
  args: { ...item },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = args => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
}
