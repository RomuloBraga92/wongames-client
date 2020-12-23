import { renderWithTheme } from 'utils/tests/helpers'
import { FormContainer, FormLink } from '.'

describe('<Form />', () => {
  it('should render the form correctly', () => {
    const { container } = renderWithTheme(
      <FormContainer>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormContainer>,
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-bdfBwQ {
        margin: 0.8rem 0;
      }

      .c0 .sc-gKsewC {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        text-align: center;
        font-size: 1.4rem;
        color: #030517;
      }

      .c1 a {
        -webkit-text-decoration: none;
        text-decoration: none;
        color: #3CD3C1;
        border-bottom: 0.2rem solid #3CD3C1;
        -webkit-transition: color,border 0.1s ease-in-out;
        transition: color,border 0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #1f8a7d;
        border-bottom: 0.2rem solid #1f8a7d;
      }

      <body>
        <div>
          <main
            class="c0"
          >
            <div
              class="c1"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </main>
        </div>
      </body>
    `)
  })
})
