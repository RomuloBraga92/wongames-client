import { Story, Meta } from '@storybook/react/types-6-0'
import TextInput, { TextInputProps } from './'

export default {
  title: 'TextInput',
  component: TextInput,
  parameters: {
    backgrounds: {
      default: 'won-light',
    },
  },
  argTypes: {
    onText: { action: 'changed' },
  },
} as Meta

export const Default: Story<TextInputProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextInput {...args} />
  </div>
)
