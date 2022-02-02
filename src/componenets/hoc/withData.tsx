import React from 'react'
interface Props {
  loading: boolean
  text: string
}

export function HOC(ChildComp: React.ComponentType<any | string>) {
  return class Component extends React.Component {
    state = {
      loading: true,
    }

    render() {
      return (
        <>
          {!this.state.loading && <ChildComp text='you are' />}
          {this.state.loading && <ChildComp text='you are but its not yours' />}
        </>
      )
    }
  }
}
