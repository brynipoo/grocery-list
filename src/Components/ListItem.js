import React from 'react';
import './ListItem.css';

export default class ListItem extends React.Component {
  render() {
    return(
      <div className='list-item-container'>
        <input type='checkbox' ></input>
        <p>{this.props.itemTitle}</p>
      </div>
    )
  }
}