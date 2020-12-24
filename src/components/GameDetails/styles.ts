import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan('large')`
      grid-template-columns: repeat(6, 1fr);
    `}
  `}
`

export const Block = styled.div``

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.gray};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`
export const IconContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`
