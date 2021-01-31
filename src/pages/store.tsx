import Store, { StoreTemplateProps } from 'templates/Store'
import filterItemsMock from 'components/ExploreSideBar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function CartPage(props: StoreTemplateProps) {
  return <Store {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock,
    },
  }
}
