import React, { FC } from 'react'
import classes from './Header.module.css'

interface Props {
  // any props that come into the component
}

const Header: FC<Props> = ({ children }) => {
  return <div className={classes.header}>{children}</div>
}

export default Header
