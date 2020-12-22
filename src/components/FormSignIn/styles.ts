import styled, { css } from 'styled-components'
import * as TextInputStyles from 'components/TextInput/styles'
import * as ButtonStyles from 'components/Button/styles'
import { darken, lighten } from 'polished'

export const Container = styled.main`
  ${({ theme }) => css`
    ${TextInputStyles.Container} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Container} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    text-align: right;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    display: block;

    &:hover {
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      border-bottom: 0.2rem solid ${theme.colors.secondary};
      transition: color, border 0.1s ease-in-out;

      &:hover {
        color: ${darken(0.2, theme.colors.secondary)};
        border-bottom: 0.2rem solid ${darken(0.2, theme.colors.secondary)};
      }
    }
  `}
`
