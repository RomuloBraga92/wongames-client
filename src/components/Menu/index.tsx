import { useState } from 'react'
import { Search as SeachIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import * as S from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <MediaMatch lessThan="medium">
        <S.MenuIconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.MenuIconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.RightIconsContainer>
        <S.MenuIconWrapper>
          <SeachIcon aria-label="Search" />
        </S.MenuIconWrapper>
        <S.MenuIconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </S.MenuIconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign In</Button>
            </Link>
          </MediaMatch>
        )}
      </S.RightIconsContainer>

      <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Store</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <>
            <S.RegisterBox>
              <Link href="/sign-in" passHref>
                <Button fullWidth size="large" as="a">
                  Log in now
                </Button>
              </Link>
              <span>or</span>
              <Link href="/sign-up" passHref>
                <S.CreateAccount title="Title">Sign Up</S.CreateAccount>
              </Link>
            </S.RegisterBox>
          </>
        )}
      </S.FullMenu>
    </S.Container>
  )
}

export default Menu
