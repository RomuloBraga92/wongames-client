import styled, { css } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
  `}
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 14rem;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: shimmerEffect 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes shimmerEffect {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${theme.spacings.xxsmall};
    position: relative;
  `}
`

export const InfoContent = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    line-height: ${theme.font.sizes.medium};
  `}
`

export const Developer = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    cursor: pointer;
    right: 0;
    top: -0.5rem;

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const Price = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    height: 3rem;
    display: inline-flex;
    align-items: center;
    padding: 0 ${theme.spacings.xxsmall};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `}
`
