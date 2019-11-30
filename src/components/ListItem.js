import React from 'react';
import '../App.css';
import { Delete, Check } from '@material-ui/icons';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const item = this.props.item;
    // if(item.isDone) {
        return (
            <li 
              className={item.isDone ? 'checked' : ''} 
              onClick={(event) => { this.props.customClickEvent(item)}}>
              { (item.isDone) && <Check/> }
              {item.name}
              <Delete 
                onClick={(event) =>{ this.props.deletItem(item)}}/>
            </li>
        )
    // } else {
  };
}

export default ListItem;
