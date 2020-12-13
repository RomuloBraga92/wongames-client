import { render, screen } from '@testing-library/react'

import GameCardSlider from './'

describe('<GameCardSlider />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameCardSlider />)

    expect(
      screen.getByRole('heading', { name: /GameCardSlider/i }),
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
