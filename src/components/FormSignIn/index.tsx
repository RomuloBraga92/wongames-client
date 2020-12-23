import { Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'

import Button from 'components/Button'
import TextInput from 'components/TextInput'

import * as S from './styles'
import { FormContainer, FormLink } from 'components/Form'

const FormSignIn = () => (
  <FormContainer>
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

      <FormLink>
        {`Don't have an account?  `}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormContainer>
)

export default FormSignIn
