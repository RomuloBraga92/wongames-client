import { useState } from 'react'
import { Search as SeachIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Logo from 'components/Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.MenuIconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open menu" />
      </S.MenuIconWrapper>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <S.RightIconsContainer>
        <S.MenuIconWrapper>
          <SeachIcon aria-label="Search" />
        </S.MenuIconWrapper>
        <S.MenuIconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </S.MenuIconWrapper>
      </S.RightIconsContainer>

      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
      </S.FullMenu>
    </S.Container>
  )
}

export default Menu
