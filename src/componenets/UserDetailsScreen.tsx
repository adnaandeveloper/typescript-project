import React from 'react'
import UseToggle from '../UseToggle'

const UserDetailsScreen = () => {
  const [isVisible, toggleVisible] = UseToggle(false)
  return (
    <div>
      custome hook example
      <button onClick={toggleVisible}> hello </button>
      {isVisible && <h1>World !</h1>}
    </div>
  )
}

export default UserDetailsScreen
