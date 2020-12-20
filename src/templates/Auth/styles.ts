import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

export const BannerSide = styled.div`
  ${({ theme }) => css`
    background-image: url('img/authbanner.png');
    background-position: center center;
    background-size: cover;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContainer = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    position: relative;
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xxlarge};
    margin-top: ${theme.spacings.xxsmall};

    > strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const BannerFooter = styled.p`
  ${({ theme }) => css`
    text-align: center;
    align-self: end;
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    z-index: ${theme.layers.base};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${HeadingStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${LogoStyles.Container} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
  `}
`

export const ContentForm = styled.div``
