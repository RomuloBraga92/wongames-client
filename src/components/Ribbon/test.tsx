import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from './'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render a primary color by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#F231A5',
    })
  })

  it('should render a secondary color when passed', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'background-color': '#3CD3C1',
    })
  })

  it('should render a normal size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'font-size': '1.4rem',
      height: '3.6rem',
    })
  })

  it('should render a small size when passed', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'font-size': '1.2rem',
      height: '2.4rem',
    })
  })

  it('should render a large size when passed', () => {
    renderWithTheme(<Ribbon size="large">Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      'font-size': '1.8rem',
      height: '4rem',
    })
  })
})
