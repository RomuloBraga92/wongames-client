import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColor } from '.'

export const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  leftLine: (theme: DefaultTheme, lineColor: LineColor) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,

  bottomLine: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 5rem;
      border-bottom: 0.7rem solid ${theme.colors[lineColor]};
    }
  `,
}

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, size, lineColor, leftLine, bottomLine }) => css`
    color: ${theme.colors[color!]};

    ${!!size && containerModifiers[size](theme)};
    ${!!leftLine && containerModifiers.leftLine(theme, lineColor!)}
    ${!!bottomLine && containerModifiers.bottomLine(theme, lineColor!)}
  `}
`
