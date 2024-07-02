// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  height: 40vh;
  width: 40%;
  background-color: #475569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
  font-weight: 400;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  text-align: center;
  color: #ffffff;
`
export const InputElement = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  background-color: #f8fafc;
  border: none;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ef4444;
`
