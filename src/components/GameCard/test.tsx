import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from './'

const props = {
  title: 'Heading 1',
  developer: 'Heading 2',
  img: '/img/gamecard-img.png',
  price: 'R$ 215,00',
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})
