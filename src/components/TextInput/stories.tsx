import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import TextInput, { TextInputProps } from './'

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  parameters: {
    backgrounds: {
      default: 'won-light',
    },
  },
  argTypes: {
    onText: { action: 'changed' },
    icon: {
      type: '',
    },
  },
} as Meta

export const Default: Story<TextInputProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextInput {...args} />
  </div>
)

export const WithIcon: Story<TextInputProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextInput {...args} />
  </div>
)

WithIcon.args = {
  icon: <Email />,
}
