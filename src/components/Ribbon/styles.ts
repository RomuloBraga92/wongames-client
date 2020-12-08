import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonProps, RibbonColors } from '.'

export type RibbonContainerProps = Pick<RibbonProps, 'color' | 'size'>

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.4rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  large: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.large};
  `,
}

export const Container = styled.div<RibbonContainerProps>`
  ${({ theme, color, size }) => css`
    ${!!size && containerModifiers[size](theme)}
    ${!!color && containerModifiers.color(theme, color)}
  `}
`
