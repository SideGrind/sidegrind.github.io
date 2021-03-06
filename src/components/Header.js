import React from 'react'

import logo from '../assets/images/logo.svg'
import wallpaper from '../assets/images/wp_header.jpg'

const Header = props => (
  <header
    id="header"
    className="alt"
    style={{
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: '100%, 100%',
    }}
  >
    <h1>Stellar</h1>
    <p>
      Just another free, fully responsive site template
      <br />
      design by <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </header>
)

export default Header
