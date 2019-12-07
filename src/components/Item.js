import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";

// class Item extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render () {
//     // const item = this.props.item;
//     let { id } = useParams();
//         return (
//             <div >
//               {id}
//             </div>
//         )
//   };
// }

function Item() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}


export default Item;
