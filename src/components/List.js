import React from 'react';
import '../App.css';
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

  render () {
    const items = this.props.items;
    return (
        <div className="list-container">
            <ul id="items">
                {
                    items.map((item, index) => 
                      <ListItem 
                        key={index} 
                        item={item} 
                        customClickEvent={this.props.onUpdateItem} 
                        deletItem={this.props.deletItem}
                        index={index}></ListItem>
                    )
                }
            </ul>
        </div>
      )
  };
}

export default List;
