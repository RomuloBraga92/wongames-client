import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type FullMenuProps = {
  isOpen: boolean
}

export const Container = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;
  `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuIconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
  `}
`

export const RightIconsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`

export const FullMenu = styled.nav<FullMenuProps>`
  ${({ theme, isOpen }) => css`
    opacity: ${isOpen ? 1 : 0};
  `}
`
