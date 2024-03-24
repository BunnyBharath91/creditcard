import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
`

export const CreditCardContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #344e7a;
  padding: 45px 12px;
  color: white;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
`
export const MainHeading = styled.h1`
  font-size: 32px;
  text-decoration: underline;
`

export const CreditCardCard = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 100%;
  height: 300px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 14px;
  padding: 12px 24px;
`

export const CardText = styled.p`
  font-size: 24px;
  ${props => props.small && 'font-size:16px;'}
  ${props => props.paymentMethod && 'color:#344e7a;'}
  line-height:1.2;
  margin: 0px;
  padding: 12px;
  margin-top: 8px;
`

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  height: 45px;
  width: 80%;
  border: solid 1px black;
  padding: 6px 12px;
`
