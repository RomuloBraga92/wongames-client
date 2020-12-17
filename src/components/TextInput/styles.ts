import styled, { css, DefaultTheme } from 'styled-components'
import { TextInputProps } from '.'

export type IconProps = Pick<TextInputProps, 'iconSide'>
export type ContainerProps = Pick<TextInputProps, 'disabled'>

const containerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, disabled }) => css`
    ${disabled && containerModifiers.disabled(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
  `}
`

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconProps>`
  ${({ theme, iconSide }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
    padding-${iconSide}: ${theme.spacings.xxsmall};
    background: transparent;
    outline: none;
    border: 0;
  `}
`

export const Icon = styled.div<IconProps>`
  ${({ theme, iconSide }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconSide === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`
