// Style your elements here

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000000;
`

export const Img = styled.img`
  height: 75px;
  width: 75px;
`

export const Para = styled.p`
  font-size: 30px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  font-family: 'Roboto';
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 5px;
  border-width: 0px;
  margin-top: 60px;
`

export default Container
