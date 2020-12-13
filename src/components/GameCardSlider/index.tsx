import { ArrowBackIos, ArrowForwardIos } from '@styled-icons/material-outlined'
import GameCard, { GameCardProps } from 'components/GameCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  nextArrow: <ArrowForwardIos aria-label="next slide" />,
  prevArrow: <ArrowBackIos aria-label="previous slide" />,
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
  <S.Container color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard {...item} key={index} />
      ))}
    </Slider>
  </S.Container>
)

export default GameCardSlider
