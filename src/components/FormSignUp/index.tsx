import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Link from 'next/link'

import Button from 'components/Button'
import TextInput from 'components/TextInput'

import { FormContainer, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormContainer>
    <form>
      <TextInput
        name="name"
        placeholder="Name"
        icon={<AccountCircle />}
        type="text"
      />
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
      <TextInput
        name="confirm-password"
        placeholder="Confirm password"
        icon={<Lock />}
        type="password"
      />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        {`Already have an account?  `}
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormContainer>
)

export default FormSignUp
