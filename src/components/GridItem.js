import React from 'react'
import classnames from 'classnames'

const Grid = props => (
  <li>
    <span className={classnames('icon major style3', props.item_icon)}></span>
    <h3>{props.item_title}</h3>
    <p>{props.item_description}</p>
  </li>
)

export default Grid
