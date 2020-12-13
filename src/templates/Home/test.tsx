import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from './'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Contact/i }),
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most populars/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i }),
    ).toBeInTheDocument()
  })
})
