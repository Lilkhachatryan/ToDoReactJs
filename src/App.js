import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { 
          id: 1,
          name: 'Need to sleep',
          isDone: false
        },
        { 
          id: 2,
          name: 'Check css flexbox',
          isDone: true
        },
        { 
          id: 3,
          name: 'Do homeworks',
          isDone: false
        },
        { 
          id: 4,
          name: 'Learn ReactJs',
          isDone: false
        },
        { 
          id: 5,
          name: 'Re-check prototype',
          isDone: true
        },
        { 
          id: 6,
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
      const items = state.items.map((item) => {
        if (item.id === i.id) {
          return { id: item.id, name: item.name, isDone: !item.isDone };
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
      const items = state.items.filter((item) => item.id !== i.id);

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
