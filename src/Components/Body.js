import React from 'react';
import ListItem from './ListItem';
import './Body.css'

export default class Body extends React.Component {
  constructor() {
    super()

    this.state = {
      itemTitles: [
        'Popcorn',
        'Ice cream'
      ]
    }
  }

  addNewItem = (e) => {
    e.preventDefault();
    let newItem = document.querySelector('.new-item-input').value;
    let newState = this.state.itemTitles;
    newState.push(newItem)
    this.setState({
      itemTitles: newState,
    })
    document.querySelector('form').reset();
  }

  render() {
    return (
      <div className='body-container'>
        <h4>Grocery List</h4>
        <label htmlFor='newItem'>Add an item to your grocery list!</label>
        <form onSubmit={this.addNewItem}>
          <input type='text' name='newItem' className='new-item-input'></input>
          <button onClick={this.addNewItem}>Add item</button>
        </form>
        <div className='list-body'>
        {this.state.itemTitles.map(item => {
          return <ListItem itemTitle={item} key={item} />
        }) }
        </div>
      </div>
    )
  }
}