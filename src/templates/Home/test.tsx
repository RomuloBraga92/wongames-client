import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMocks from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import 'match-media-mock'

const props = {
  banners: bannerMocks,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGamesHighlight: highlightMock,
  freeGames: gamesMock,
}

import Home from './'

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    },
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    },
  }
})

describe('<Home />', () => {
  it('should render homepage correctly', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(5)
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
  })
})
