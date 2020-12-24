import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/pic01.jpg'

const Spotlight = props => (
  <section id="intro" className="main">
    <div className="spotlight">
      <div className="content">
        <header className="major">
          <h2>Sidegrind</h2>
        </header>
        <p>Description text here.</p>
        <ul className="actions">
          <li>
            <Link to="/generic" className="button">
              Learn More
            </Link>
          </li>
        </ul>
      </div>
      <span className="image">
        <img src={pic01} alt="" />
      </span>
    </div>
  </section>
)

export default Spotlight
