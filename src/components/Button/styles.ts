import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size'>

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
  `,
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size }) => css`
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

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
  `}
`
