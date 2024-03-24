import {useState} from 'react'
import {
  BgContainer,
  CreditCardContainer,
  FormContainer,
  MainHeading,
  CreditCardCard,
  CardText,
  Form,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeName = event => {
    setHolderName(event.target.value)
  }

  return (
    <BgContainer>
      <CreditCardContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <CreditCardCard data-testid="creditCard">
          <CardText>{cardNumber}</CardText>
          <CardText as="p">CARDHOLDER NAME</CardText>
          <CardText small>{holderName}</CardText>
        </CreditCardCard>
      </CreditCardContainer>
      <FormContainer>
        <Form>
          <CardText as="h1" small paymentMethod>
            Payment Method
          </CardText>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </Form>
      </FormContainer>
    </BgContainer>
  )
}

export default CreditCard
