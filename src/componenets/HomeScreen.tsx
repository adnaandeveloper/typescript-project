import * as React from 'react'
import { Link } from 'react-router-dom'
import UseToggle from '../UseToggle'

import { HOC } from './hoc/withData'
interface Props {
  text: string
}

const HomeScreen = ({ text }: Props) => {
  const [isVisible, toggle] = UseToggle(false)
  return (
    <div>
      Home
      {text}
      <Link to='usersList'>All Users</Link>
      <br />
      <Link to='users'> her you have custom hook</Link>
      <button onClick={toggle}> toggle the modal</button>
      {isVisible && <h1> modal </h1>}
    </div>
  )
}

export default HOC(HomeScreen)
