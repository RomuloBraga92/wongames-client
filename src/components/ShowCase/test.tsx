import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import ShowCase from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1),
}

describe('<ShowCase />', () => {
  it('should render full ShowCase', () => {
    renderWithTheme(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title }),
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <ShowCase games={props.games} highlight={props.highlight} />,
    )

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i }),
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<ShowCase title={props.title} games={props.games} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: gamesMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title }),
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <ShowCase title={props.title} highlight={props.highlight} />,
    )

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title }),
    ).not.toBeInTheDocument()
  })
})
