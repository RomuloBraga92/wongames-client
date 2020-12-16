import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from './'

describe('<Checkbox />', () => {
  it('should render checkbox with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should not render label when not passed', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render a black label when passed', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />,
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517',
    })
  })

  it('should render a white label by default', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA',
    })
  })

  it('should dispatch onCheck when changed', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when changed and started checked', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should focus checkbox when tab is pressed', () => {
    renderWithTheme(<Checkbox label="checkbox" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
