import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

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
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size, hasIcon, fullWidth }) => css`
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

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }

    ${!!size && containerModifiers[size](theme)}
    ${!!fullWidth && containerModifiers.fullWidth()}
    ${!!hasIcon && containerModifiers.withIcon(theme)}
  `}
`
