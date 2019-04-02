import React from 'react';
import ListItem from './ListItem';
import './Body.css'

export default class Body extends React.Component {
  constructor() {
    super()

    this.state = {
      itemTitles: []
    }
  }

  render() {
    return (
      <div className='body-container'>
        <h4>Grocery List</h4>
        <header>
          <p>Purchased</p>
          <p>Item Title</p>
        </header>
        <div class='list-body'>
          <ListItem itemTitle='Popcorn' />
        </div>
      </div>
    )
  }
}