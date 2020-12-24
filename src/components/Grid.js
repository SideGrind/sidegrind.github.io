import React from 'react'
import { Link } from 'gatsby'

const Grid = props => (
  <span>
    <section id="members" className="main special">
      <header className="major">
        <h2>{props.title}</h2>
      </header>
      {props.children}
      <footer className="major">
        <ul className="actions">
          <li>
            <Link to="/generic" className="button">
              Learn More
            </Link>
          </li>
        </ul>
      </footer>
    </section>
  </span>
)

export default Grid
