import * as S from './styles'
import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  infinite: false,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
}

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Container>
    <Slider settings={settings}>
      {items.map(item => (
        <Banner {...item} key={item.title} />
      ))}
    </Slider>
  </S.Container>
)

export default BannerSlider
