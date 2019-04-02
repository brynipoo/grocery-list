import React from 'react';
import './ListItem.css';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div class='list-item-container'>
        <input type='checkbox' ></input>
        <p>{this.props.itemTitle}</p>
      </div>
    )
  }
}