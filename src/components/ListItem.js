import React from 'react';
import '../App.css';
import { Delete, Check } from '@material-ui/icons';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const item = this.props.item;
    if(item.isDone) {
        return (
            <li 
              className={item.isDone ? 'checked' : ''} 
              onClick={() => this.props.customClickEvent(this.props.index)}>
              <Check/>
              {item.name}
              <Delete onClick={() => this.props.deletItem(this.props.index)}/>
            </li>
        )
    } else {
        return (
            <li 
              className={item.isDone ? 'checked' : ''} 
              onClick={() => this.props.customClickEvent(this.props.index)}>
              {item.name}
              <Delete/>
            </li>
          )
    }
    
  };
}

export default ListItem;
