import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  background-size: cover;
  padding: 24px;
`

export const SubContainer = styled.div`
  background-color: black;
  border-radius: 12px;
  padding: 20px;
  margin: 20px;
  border-width: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ImageContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  margin-left: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: white;
  font-size: 26px;
  font-weight: 600px;
`
export const Image = styled.img`
  height: 500px;
  width: 500px;
`
export const RightContainer = styled.div`
  background-color: #25262c;
  border-radius: 12px;
  border: 2px solid white;
`
export const ContentContainer = styled.ul`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 40vw;
  padding: 24px;
`
export const BoldButton = styled.button`
  color: #f1f5f9;
  background-color: black;
  border-width: 0px;
`
export const ItalicButton = styled.button`
  color: #f1f5f9;
  background-color: transparent;
  border-width: 0px;
`
export const LineButton = styled.button`
  color: #f1f5f9;
  border-width: 0px;
  background-color: transparent;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  border-width: 2px;
  height: 400px;
  width: 40vw;
  font-weight: ${props => (props.good ? 'bold' : 'normal')};
  font-style: ${props => (props.bad ? 'italic' : 'normal')};
  text-decoration: ${props => (props.line ? 'underline' : 'normal')};
`
