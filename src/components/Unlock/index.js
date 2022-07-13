// Write your code here
import {Container, Para, Img, Button} from './styledComponents'

const Unlock = props => {
  const {changeState} = props

  const ok = () => {
    changeState()
  }

  return (
    <Container>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        alt="unlock"
      />
      <Para>Your device is UnLocked</Para>

      <Button type="button" onClick={ok}>
        Lock
      </Button>
    </Container>
  )
}

export default Unlock
