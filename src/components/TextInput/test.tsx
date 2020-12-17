import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import TextInput from './'
import { Email } from '@styled-icons/material-outlined'

describe('<TextInput />', () => {
  it('should render the TextInput with label when passed', () => {
    renderWithTheme(
      <TextInput label="textinput" labelFor="textinput" id="textinput" />,
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText('textinput')).toBeInTheDocument()
  })

  it('should render the TextInput without label', () => {
    renderWithTheme(<TextInput />)

    expect(screen.queryByLabelText('textinput')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextInput placeholder="placeholder" />)

    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument()
  })

  it('should dispatch an onText when typing', async () => {
    const onText = jest.fn()

    renderWithTheme(
      <TextInput
        label="textinput"
        labelFor="textinput"
        id="textinput"
        onText={onText}
      />,
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    expect(onText).not.toHaveBeenCalled()

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onText).toHaveBeenCalledTimes(text.length)
    })

    expect(onText).toHaveBeenCalledWith(text)
  })

  it('should focus input when tab is pressed', () => {
    renderWithTheme(<TextInput />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render an icon when passed', () => {
    renderWithTheme(
      <TextInput
        icon={<Email data-testid="icon" />}
        label="textinput"
        labelFor="textinput"
        id="textinput"
      />,
    )

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render icon on right when passed', () => {
    renderWithTheme(
      <TextInput icon={<Email data-testid="icon" />} iconSide="right" />,
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1,
    })
  })
})
