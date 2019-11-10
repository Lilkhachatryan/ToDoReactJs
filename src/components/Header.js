import React from 'react';
import '../App.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItem: { name: '', isDone: false} };
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    this.setState({
      newItem: { name: value, isDone: false }
    });
  }

  render () {
    return (
      <div className="header-container">
        <h2 className="header">Lilit's ToDo List</h2>
        <input 
          id="add-input" 
          type="text" 
          placeholder="Add more awesome things..." 
          onChange={(e) => this.handleInputChange(e)} 
          value={this.state.newItem.name}/>
        <span 
          className="add-button"
          onClick={() => this.props.addItem(this.state.newItem)}>Add</span>
      </div>
      )
  };
}

export default Header;
