import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Item from './components/Item';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { db} from './index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.onAddItem = this.onAddItem.bind(this);
    this.onUpdateItem = this.onUpdateItem.bind(this);
    this.onDeletItem = this.onDeletItem.bind(this);
  }

  getTodoList() {
    const ref = db.collection('toDoItems');
    let toDoArr = [];

    ref.get()
      .then((docs) => {       
        toDoArr = docs.docs.map(doc => {
          if (doc.exists) {
            return doc.data();
          } else {
            console.log("No such document!");
          }
        });

        this.setState({
          items: toDoArr,
        })
      })
      .catch((err) => console.log("err -->", err))
  }

  componentDidMount() {
    this.getTodoList();    
  }

  onAddItem(newItem) {
    newItem.id = new Date().getUTCMilliseconds();

    db.collection('toDoItems').doc(`${newItem.id}`).set(newItem);

    this.getTodoList();
  }

  onUpdateItem(i) {
    const ref = db.collection('toDoItems');
    this.state.items.map((item) => {
      if (item.id === i.id) {
        ref.doc(`${i.id}`).set({ id: item.id, name: item.name, isDone: !item.isDone }).then(() => {
          
        });
        this.getTodoList();
      }
    });
    
    // this.setState(state => {
    //   const items = state.items.map((item) => {
    //     if (item.id === i.id) {
    //       return { id: item.id, name: item.name, isDone: !item.isDone };
    //     } else {
    //       return item;
    //     }
    //   });

    //   return {
    //     items: items
    //   };
    // });
  };

  onDeletItem(i) {
    const ref = db.collection('toDoItems');
    
    ref.doc(`${i.id}`).delete().then(() => {
      this.getTodoList();
    });
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

    // return (
    //   <Router>
    //     <div>
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to="/">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/to-do">ToDo</Link>
    //           </li>
    //           <li>
    //             <Link to="/item/3">Item</Link>
    //           </li>
    //         </ul>
    //       </nav>
  
    //       <Switch>
    //         <Route path="/to-do">
    //         <List 
    //           items={this.state.items} 
    //           onUpdateItem={this.onUpdateItem}
    //           deletItem={this.onDeletItem}></List>
    //         </Route>
    //         <Route path="/add-item">
    //           <Header addItem={this.onAddItem}></Header>
    //         </Route>
    //         <Route path="/item/:id" children={ <Item />}>
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // );
  }
}

export default App;
