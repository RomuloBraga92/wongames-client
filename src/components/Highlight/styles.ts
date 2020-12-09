import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from '.'

export type ContainerProps = Pick<HighlightProps, 'backgroundImage'>

export const Container = styled.div<ContainerProps>`
  ${({ backgroundImage }) => css`
    height: 23rem;
    position: relative;
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    display: grid;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      top: 0;
      left: 0;
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    text-align: right;

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large}
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge}
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large}
    `}
  `}
`
