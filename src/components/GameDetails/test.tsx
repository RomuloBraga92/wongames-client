import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from './'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  publisher: 'Walkabout',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
}

describe('<GameDetails />', () => {
  it('should render game details blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /developers/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render formatted date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render publisher content', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Walkabout/i)).toBeInTheDocument()
  })

  it('should render FREE when rating is BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('FREE')).toBeInTheDocument()
  })

  it('should render 18+ when rating is BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Role-playing \/ Narrative/i)).toBeInTheDocument()
  })
})
