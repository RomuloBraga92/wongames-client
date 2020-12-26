import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist, { WishlistTemplateProps } from './'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const props: WishlistTemplateProps = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock.slice(0, 2),
  games: gamesMock,
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  },
}))

describe('<Wishlist />', () => {
  it('should render the components', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i }),
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render wishlist games', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })
})
