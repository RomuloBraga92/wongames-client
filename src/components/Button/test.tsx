import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Button from './'

describe('<Button />', () => {
  it('should render a large size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      'font-size': '1.6rem',
    })
  })

  it('should render a small size when passed', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
    })
  })

  it('should render a medium size when passed', () => {
    renderWithTheme(<Button size="medium">Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
    })
  })

  it('should render a fullWidth size when passed', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%',
    })
  })

  it('should render an icon when passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    )

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>,
    )

    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/link',
    )
  })

  it('should render Button with minimal styles when passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>,
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5',
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover',
      },
    )
  })
})
