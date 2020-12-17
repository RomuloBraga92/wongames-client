import styled, { css } from 'styled-components'

export const Container = styled.div``

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
    background: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    outline: none;
    border: 0;
  `}
`
