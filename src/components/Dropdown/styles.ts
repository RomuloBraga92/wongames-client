import styled, { css } from 'styled-components'

type ContainerProps = {
  isOpen?: boolean
}

const containerModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0rem);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      ${isOpen && containerModifiers.open()};
      ${!isOpen && containerModifiers.close()};
      transition: opacity ${theme.transition.default}, transform 0.2s ease-in;
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    cursor: pointer;
    padding-right: 2.4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`
