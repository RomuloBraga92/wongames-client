import { Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'

import Button from 'components/Button'
import TextInput from 'components/TextInput'
import * as S from './styles'

const FormSignIn = () => (
  <S.Container>
    <form>
      <TextInput
        name="email"
        placeholder="E-mail"
        icon={<Email />}
        type="email"
      />
      <TextInput
        name="password"
        placeholder="Password"
        icon={<Lock />}
        type="password"
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <S.FormLink>
        {`Don't have an account?  `}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Container>
)

export default FormSignIn
