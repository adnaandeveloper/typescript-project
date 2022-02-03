import React from 'react'
import { Link } from 'react-router-dom'
import UseToggle from '../UseToggle'
import styled from 'styled-components'
import { css, cx } from '@emotion/css'

import { HOC } from './hoc/withData'
import Header from './Header'
interface Props {
  text: string
}

const HomeScreen = ({ text }: Props) => {
  const color = 'white'
  const Button = styled.button`
    background-color: blue;
    color: white;
    display: flex;
    margin: auto;
    border: non;
    margin-bottom: 50px;
    padding: 26px;
    &:hover {
      background-color: black;
      padding: 30px;
    }
  `

  const [isVisible, toggle] = UseToggle(false)
  return (
    <Header>
      Home
      {text}
      <Link to='usersList'>All Users</Link>
      <br />
      <Link to='users'> her you have custom hook</Link>
      <Button onClick={toggle}> toggle the modal</Button>
      {isVisible && <h1> modal </h1>}
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          display: inline;
          font-size: 24px;
          margin: 45px;
          border-radius: 4px;
          &:hover {
            color: ${color};
            padding: 39px;
            border-radius: 9px;
          }
        `}
      >
        this is made with @emotion js my brother!
      </div>
    </Header>
  )
}

export default HOC(HomeScreen)
