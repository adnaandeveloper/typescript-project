import React from 'react'
import { Link } from 'react-router-dom'
import UseToggle from '../UseToggle'
import styled from 'styled-components'

import { HOC } from './hoc/withData'
interface Props {
  text: string
}

const HomeScreen = ({ text }: Props) => {
  const Button = styled.button`
    background-color: blue;
    color: white;
    display: flex;
    margin: auto;
    border: non;
    padding: 26px;
    &:hover {
      background-color: black;
      padding: 30px;
    }
  `

  const [isVisible, toggle] = UseToggle(false)
  return (
    <div>
      Home
      {text}
      <Link to='usersList'>All Users</Link>
      <br />
      <Link to='users'> her you have custom hook</Link>
      <Button onClick={toggle}> toggle the modal</Button>
      {isVisible && <h1> modal </h1>}
    </div>
  )
}

export default HOC(HomeScreen)
