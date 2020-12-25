import React from 'react'
import classnames from 'classnames'

const GridItem = props => (
  <li>
    <span className={classnames('icon major style3', props.item_icon)} />
    <h3>{props.item_title}</h3>
    <p>{props.item_description}</p>
  </li>
)

export default GridItem
