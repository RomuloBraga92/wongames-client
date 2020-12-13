import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import { Container } from './'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    )
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin: 0 auto;
        padding: 0 calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `)
  })
})
