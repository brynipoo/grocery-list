import React from 'react';
import './ListItem.scss';

export default class ListItem extends React.Component {
  render() {
    return(
      <div className='list-item-container'>
        <label className='checkbox-container'>
          <input type='checkbox'></input>
          <span className='checkmark'></span>
        </label>
        <p>{this.props.itemTitle}</p>
      </div>
    )
  }
}