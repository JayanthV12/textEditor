import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  ImageContainer,
  Heading,
  Image,
  RightContainer,
  ContentContainer,
  BoldButton,
  ItalicButton,
  LineButton,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {
    text: '',
    bold: false,
    italic: false,
    underline: false,
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  onItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    console.log(bold)
    return (
      <MainContainer>
        <SubContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <RightContainer>
            <ContentContainer>
              <li>
                <BoldButton data-testid="bold" red={bold} onClick={this.onBold}>
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  data-testid="italic"
                  onClick={this.onItalic}
                  italic={italic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <LineButton
                  data-testid="underline"
                  onClick={this.onUnderline}
                  underline={underline}
                >
                  <AiOutlineUnderline size={25} />
                </LineButton>
              </li>
            </ContentContainer>
            <hr />
            <TextArea
              onChange={this.onChangeInput}
              good={bold}
              bad={italic}
              line={underline}
            />
          </RightContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default Home
