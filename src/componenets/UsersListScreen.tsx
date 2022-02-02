import { connect } from 'react-redux'
import React, { Component } from 'react'

interface IProps {
  counter: string
  plus: () => void
}

class UsersListScreen extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props)
  }
  render() {
    return (
      <div>
        all users is going her soon
        <br />
        {this.props.counter}
        <button onClick={() => this.props.plus()}>+</button>
      </div>
    )
  }
}

const mayStateToProps = (state: any) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    plus: () => dispatch({ type: 'PLUS' }),
  }
}
export default connect(mayStateToProps, mapDispatchToProps)(UsersListScreen)
