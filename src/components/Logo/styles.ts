import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const containerModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 6rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      .text {
        display: none;
      }

      svg {
        pointer-events: none;
        height: 4.5rem;
      }
    `}
  `,
}

export const Container = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && containerModifiers[size]}
    ${!!hideOnMobile && containerModifiers.hideOnMobile}
  `}
`
