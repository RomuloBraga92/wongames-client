import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Container},
    ${HighlightStyles.Container},
    ${GameCardSliderStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${HighlightStyles.Container} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    ${GameCardSliderStyles.Container} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
