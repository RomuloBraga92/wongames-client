import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Heading from './'

describe('<Heading />', () => {
  it('should render a heading with black color by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517',
    })
  })

  it('should render a heading with white color when passed', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA',
    })
  })

  it('should render a heading with medium size by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '2.0rem',
    })
  })

  it('should render a heading with small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem',
    })
  })

  it('should render a heading with huge size', () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '5.2rem',
    })
  })

  it('should render a heading with a left line', () => {
    renderWithTheme(
      <Heading leftLine lineColor="primary">
        Won Games
      </Heading>,
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    })
  })

  it('should render a heading with a bottom line', () => {
    renderWithTheme(
      <Heading bottomLine lineColor="primary">
        Won Games
      </Heading>,
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after',
      },
    )
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading leftLine bottomLine lineColor="primary">
        Won Games
      </Heading>,
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after',
      },
    )
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading leftLine bottomLine lineColor="secondary">
        Won Games
      </Heading>,
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #3CD3C1',
      {
        modifier: '::after',
      },
    )
  })
})
