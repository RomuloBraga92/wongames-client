import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted,
} from '@styled-icons/material-outlined'
import Link from 'next/link'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav aria-labelledby="Profile menu">
    <Link href="/profile/me" passHref>
      <S.Link title="my profile" isActive={activeLink === '/profile/me'}>
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link title="my cards" isActive={activeLink === '/profile/cards'}>
        <CreditCard size={24} />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link title="my orders" isActive={activeLink === '/profile/orders'}>
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.Link>
    </Link>

    <Link href="/sign-out" passHref>
      <S.Link title="sign out">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
