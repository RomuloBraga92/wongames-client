import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from './'
import * as S from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
}

describe('<Highlight />', () => {
  it('should render the headings and the button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Heading 2/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/rdr2',
    )
  })

  it('should render a background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    })
  })

  it('should render a float image when passed', () => {
    renderWithTheme(<Highlight {...props} floatImage="/red-dead-float.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/red-dead-float.png',
    )
  })

  it('should render align left by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage contentitems'",
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`,
    })
  })

  it('should render align right when passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="right" />,
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'contentitems floatimage'",
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`,
    })
  })
})
