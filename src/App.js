import React, { Component } from 'react';

import { Cardlist } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    //this.handleChange = this.handleChange.bind(this);
    //bind what dot bind is a method on any function that returns a new function where
    //the context of this is set to whatever we passed to it and the context of this we're setting
    //in handle change
  }
  // Life cycle method is essentially methods that get called at different stages of
  // when this component gets rendered
  // It does is it's kind of like the name right when this component
  //mounts mounting is essentially one  react puts our component on the page right. It  rneder
  // on browser when it  does that it read it calls whatever block of code we write here
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  // this method not call or setState because it is not in scope
  // we need to explicity state what context to be

  //automaticaallly bind this to the place where this arrow function was defined in the first place
  // and thecontext of arrow function is app component
  // they automatically get whats called lexical scoping which means above sentance
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters}></Cardlist>
      </div>
    );
  }
}

export default App;
