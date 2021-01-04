import Button from 'components/Button'
import Heading from 'components/Heading'
import TextInput from 'components/TextInput'

import * as S from './styles'

const FormProfile = () => (
  <S.Container>
    <Heading bottomLine color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextInput
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Doe"
      />

      <TextInput
        name="email"
        type="email"
        placeholder="E-mail"
        initialValue="johndoe@gmail.com"
        label="E-mail"
        disabled
      />

      <TextInput
        name="password"
        type="password"
        placeholder="Current password"
        label="Password"
      />

      <TextInput
        name="new_password"
        type="password"
        placeholder="New password"
        label="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Container>
)

export default FormProfile
