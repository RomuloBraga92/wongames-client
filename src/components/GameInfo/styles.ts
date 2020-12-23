import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};

    ${RibbonStyles.Container} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      ${RibbonStyles.Container} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};

        &:before{
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      max-width: 77rem;
    `}
  `}
`

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    > button {
      width: 100%;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      >button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`
