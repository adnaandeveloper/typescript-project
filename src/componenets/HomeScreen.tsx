import * as React from 'react'
import { Link } from 'react-router-dom'

import { HOC } from './hoc/withData'
interface Props {
  text: string
}

const HomeScreen = ({ text }: Props) => {
  return (
    <div>
      Home
      {text}
      <Link to='usersList'>All Users</Link>
    </div>
  )
}

export default HOC(HomeScreen)
