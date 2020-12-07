import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from './'

describe('<Banner />', () => {
  beforeEach(() => {
    renderWithTheme(
      <>
        <Banner
          img="https://source.unsplash.com/user/willianjusten/1042x580"
          title="Defy death"
          subtitle="<p>Play the new <strong>CrashLands</strong> season"
          buttonLabel="Buy now"
          buttonLink="/games/defy-death"
        />
      </>,
    )
  })

  it('should render a title', () => {
    expect(
      screen.getByRole('heading', { name: /Defy death/i }),
    ).toBeInTheDocument()
  })
  it('shound render a subtitle', () => {
    expect(
      screen.getByRole('heading', { name: /Play the new crashlands season/i }),
    ).toBeInTheDocument()
  })
  it('should render an image', () => {
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()
  })
})
