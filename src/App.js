import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { 
          name: 'Need to sleep',
          isDone: false
        },
        { 
          name: 'Check css flexbox',
          isDone: true
        },
        { 
          name: 'Do homeworks',
          isDone: false
        },
        { 
          name: 'Learn ReactJs',
          isDone: false
        },
        { 
          name: 'Re-check prototype',
          isDone: true
        },
        { 
          name: 'ToDo List in React',
          isDone: false
        }
      ]
    }

    this.onAddItem = this.onAddItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeletItem = this.onDeletItem.bind(this);
  }

  onAddItem(newItem) {
    this.setState((state) => {
      const list = [...state.items, newItem];
      return {
        items: list
      }
    });
  }

  onUpdateItem(i) {
    this.setState(state => {
      const items = state.items.map((item, j) => {
        if (j == i) {
          return { name: item.name, isDone: !item.isDone };
        } else {
          return item;
        }
      });

      return {
        items: items
      };
    });
  };

  onDeletItem(i) {
    this.setState(state => {
      const items = state.items.filter((item, index) => index !== i);

      return {
        items
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header addItem={this.onAddItem}></Header>
        <List 
          items={this.state.items} 
          onUpdateItem={this.onUpdateItem}
          deletItem={this.onDeletItem}></List>
      </div>
    )
  }
}

export default App;
