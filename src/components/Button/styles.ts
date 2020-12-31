import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        padding-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, hasIcon, fullWidth, minimal, disabled }) => css`
    display: inline-flex;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border-radius: ${theme.border.radius};
    cursor: pointer;
    font-family: ${theme.font.family};
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    border: 0;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    font-weight: ${theme.font.medium};
    text-align: center;

    &:hover {
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    }

    ${!!size && containerModifiers[size](theme)}
    ${!!fullWidth && containerModifiers.fullWidth()}
    ${!!minimal && containerModifiers.minimal(theme)}
    ${!!hasIcon && containerModifiers.withIcon(theme)}
    ${disabled && containerModifiers.disabled()};
  `}
`
