import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import TextInput from './'
import { Email } from '@styled-icons/material-outlined'

describe('<TextInput />', () => {
  it('should render the TextInput with label when passed', () => {
    renderWithTheme(<TextInput label="textinput" name="label" />)

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
      <TextInput label="textinput" name="TextField" onText={onText} />,
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
        name="TextInput"
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

  it('should not allow to type when disabled is passed', async () => {
    const onText = jest.fn()
    renderWithTheme(
      <TextInput onText={onText} name="text" id="text" disabled />,
    )

    const input = screen.getByRole('textbox')
    const text = 'Some text'

    expect(input).toBeDisabled()

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
      expect(onText).not.toHaveBeenCalled()
    })
  })

  it('should not focus when tab is pressed and disabled is passed', () => {
    renderWithTheme(<TextInput disabled />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })

  it('should render an error message', () => {
    renderWithTheme(<TextInput error="error message" />)

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
  })
})
