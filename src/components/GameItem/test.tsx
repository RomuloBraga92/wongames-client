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
    ).toHaveAttribute('src', props.img)
    expect(
      screen.getByRole('heading', { name: /red dead redemption 2/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/R\$ 215,00/i)).toBeInTheDocument()
  })

  it('should render download link with icon', () => {
    const downloadLink = 'http://link'

    renderWithTheme(<GameItem downloadLink={downloadLink} {...props} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` }),
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32',
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img,
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
