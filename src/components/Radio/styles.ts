import styled, { css } from 'styled-components'
import { RadioProps } from '.'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background border 0.1s ease-in-out;
    outline: none;

    &:before {
      content: '';
      height: 1rem;
      width: 1rem;
      background: ${theme.colors.primary};
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.1s ease-in-out;
      position: absolute;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export type LabelProps = Pick<RadioProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    cursor: pointer;
  `}
`
