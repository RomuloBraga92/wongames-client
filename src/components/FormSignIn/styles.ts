import styled, { css } from 'styled-components'
import { lighten } from 'polished'

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
