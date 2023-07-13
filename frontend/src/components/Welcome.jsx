import React from 'react'
import '../styles/Welcome.css'

function Welcome() {
  return (
    <div className='welcome_home'>
      <h1 id="welcome_title">Welcome to Dog Stats</h1>
      <h4 id="welcome_subtext">Discover the perfect dog breed for your lifestyle!</h4>
      <a id="explore" href='#dog_selector_top'>Explore</a>
    </div>
  )
}

export default Welcome;