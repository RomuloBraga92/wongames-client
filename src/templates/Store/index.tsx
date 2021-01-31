import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import ExploreSideBar, { ItemsProps } from 'components/ExploreSideBar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'

import Base from 'templates/Base'

import * as S from './styles'

export type StoreTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemsProps[]
}

const Store = ({ games = [], filterItems }: StoreTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSideBar
        items={filterItems}
        onFilter={() => console.log('filter')}
      />

      <section>
        <Grid>
          {games.map(item => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('show more')}>
          <p>Show more</p>
          <KeyboardArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default Store
