import {Container, Para, Img, Button} from './styledComponents'

const Lock = props => {
  const {changeState} = props

  const ok = () => {
    changeState()
  }

  return (
    <Container>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        alt="lock"
      />
      <Para>Your device is Locked</Para>

      <Button type="button" onClick={ok}>
        Unlock
      </Button>
    </Container>
  )
}

export default Lock
