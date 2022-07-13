import {useState} from 'react'

import Unlock from './components/Unlock'

import Lock from './components/Lock'

import {GlobalStyle} from './styledComponents'

const App = () => {
  const [lock, setLock] = useState(false)
  const changeState = () => {
    setLock(prevState => !prevState)
  }

  return (
    <>
      <GlobalStyle />
      <>
        {lock === false ? (
          <Lock changeState={changeState} />
        ) : (
          <Unlock changeState={changeState} />
        )}
      </>
    </>
  )
}

export default App
