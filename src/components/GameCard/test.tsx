import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from './'

const props = {
  title: 'Heading 1',
  developer: 'Heading 2',
  img: '/img/gamecard-img.png',
  price: 'R$ 235,00',
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

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      'background-color': '#3CD3C1',
    })

    expect(screen.getByText(/R\$ 235,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through',
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 215,00" />)

    expect(screen.getByText(/R\$ 235,00/i)).toHaveStyle({
      'text-decoration': 'line-through',
    })

    expect(screen.getByText(/R\$ 215,00/i)).not.toHaveStyle({
      'text-decoration': 'line-through',
    })
  })

  it('should render a filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call a method onFav when favButton is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render with ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />,
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      'background-color': '#3CD3C1',
    })
    expect(ribbon).toHaveStyle({
      'font-size': '1.2rem',
      height: '2.4rem',
    })
  })
})
