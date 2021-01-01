import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'second', 'members']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">About Us</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">Our Projects</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="members">
          <a href="#">Our Members</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
