import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMocks from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import 'match-media-mock'

const props = {
  banners: bannerMocks,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock,
  freeGames: [gamesMock[0]],
}

import Home from './'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Contact/i }),
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />)

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

  it('should render section elements', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(2)
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)
  })
})
