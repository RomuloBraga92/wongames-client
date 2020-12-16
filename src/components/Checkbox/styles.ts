import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

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
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background border 0.1s ease-in-out;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      position: absolute;
      opacity: 0;
      transform: rotate(45deg);
      top: 0.1rem;
      transition: 0.1s ease-ease-in-out;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`

export type LabelProps = Pick<CheckboxProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    cursor: pointer;
    line-height: 1;
  `}
`
