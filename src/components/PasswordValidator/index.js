// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  Para,
  InputElement,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputElement, setInput] = useState('')

  const onChangePassword = event => {
    setInput(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <InputElement
          type="password"
          value={inputElement}
          onChange={onChangePassword}
        />
        <ErrorMessage>
          {inputElement.length >= 8
            ? ''
            : 'Your password must be at least 8 characters'}
        </ErrorMessage>
      </CardContainer>
    </MainContainer>
  )
}
export default PasswordValidator
