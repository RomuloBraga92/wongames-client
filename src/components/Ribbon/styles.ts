import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonProps, RibbonColors } from '.'
import { darken } from 'polished'

export type RibbonContainerProps = Pick<RibbonProps, 'color' | 'size'>

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-right-width: 2rem;
      border-top-width: 1rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.4rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.6rem;

    &::before {
      top: 2.4rem;
      border-right-width: 1.6rem;
      border-top-width: 0.7rem;
    }
  `,

  large: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.large};
    padding: 0 ${theme.spacings.medium};
    right: -2.4rem;

    &::before {
      top: 4rem;
      border-right-width: 2.4rem;
      border-top-width: 1.2rem;
    }
  `,
}

export const Container = styled.div<RibbonContainerProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    top: ${theme.spacings.small};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && containerModifiers[size](theme)}
    ${!!color && containerModifiers.color(theme, color)}
  `}
`
