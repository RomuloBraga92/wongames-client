import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from '.'

export type ContainerProps = Pick<
  HighlightProps,
  'backgroundImage' | 'alignment'
>

const containerModifiers = {
  left: () => css`
    grid-template-areas: 'floatimage contentitems';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,

  right: () => css`
    grid-template-areas: 'contentitems floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }
    ${FloatImage} {
      justify-self: end;
    }
  `,
}

export const Container = styled.div<ContainerProps>`
  ${({ backgroundImage, alignment }) => css`
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

    ${containerModifiers[alignment!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;
    grid-area: floatimage;
    align-self: end;

    ${media.greaterThan('medium')`
      height: 28rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: contentitems;

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
