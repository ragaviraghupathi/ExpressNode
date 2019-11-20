import React from 'react';

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      booksArray: [
        {
          title:"java"
        },
        {
          title:"react"
        }
      ]
    };
  }
  
  componentDidMount() {
    fetch('/api/books/')
      .then((res) => 
        res.json()
      )
      .then((booksData) => {
        console.log(booksData);
        this.setState({
          booksArray:booksData
        });
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.booksArray.map((book, index) =>
            <li>{book.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
