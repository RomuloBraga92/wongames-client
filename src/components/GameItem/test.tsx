import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from './'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
}

describe('<GameItem />', () => {
  it('should render the game item content', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(
      screen.getByRole('img', { name: /red dead redemption 2/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()
  })
})
