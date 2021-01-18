import { useState } from 'react'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

type Field = {
  label: string
  name: string
}

export type ItemsProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

export type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemsProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSideBar = ({
  items,
  initialValues = {},
  onFilter,
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleFilter = () => {
    onFilter(values)
  }

  const handleChange = (name: string, value: string | boolean) => {
    setValues(oldState => ({ ...oldState, [name]: value }))
  }

  return (
    <S.Container>
      {items.map(item => (
        <div key={item.title}>
          <Heading bottomLine lineColor="secondary" size="small" color="white">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map(field => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={newValue => handleChange(field.name, newValue)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map(field => (
              <Radio
                key={field.name}
                id={field.name}
                name={item.name}
                label={field.label}
                labelFor={field.name}
                value={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleChange(item.name, field.name)}
              />
            ))}
        </div>
      ))}
      <Button fullWidth size="medium" onClick={handleFilter}>
        Filter
      </Button>
    </S.Container>
  )
}

export default ExploreSideBar
