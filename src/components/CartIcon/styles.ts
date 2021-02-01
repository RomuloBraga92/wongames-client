import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
    color: ${theme.colors.white};
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  `}
`
