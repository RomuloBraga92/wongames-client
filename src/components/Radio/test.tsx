import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Radio from './'

describe('<Radio />', () => {
  it('should render radio with label', () => {
    renderWithTheme(<Radio label="radio" labelFor="check" value="anyValue" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText(/radio/i)).toBeInTheDocument()
    expect(screen.getByText('radio')).toHaveAttribute('for', 'check')
  })

  it('should not render a label when not passed', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText('radio')).not.toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    renderWithTheme(<Radio label="radio" labelFor="check" />)

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: '#FAFAFA',
    })
  })

  it('should render a black label when passed', () => {
    renderWithTheme(<Radio label="radio" labelFor="check" labelColor="black" />)

    expect(screen.getByText(/radio/i)).toHaveStyle({
      color: '#030517',
    })
  })

  it('should dispatch onCheck when changed', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="radio"
        labelFor="radio"
        onCheck={onCheck}
        value="anyValue"
      />,
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
  })

  it('should focus radio when tab is pressed', () => {
    renderWithTheme(<Radio label="label" labelFor="label" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
