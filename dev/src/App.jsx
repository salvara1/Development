import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FilteredList from './FilteredList'
import './App.css'
import balsalm from './freshbalsalm.jpg'
import flannel from './flannel.jpg'
import cran from './frostedcranberry.jpg'
import vanilla from './vanillabean.jpg'
import pumpkin from './pumpkin.jpg'
import sweater from './sweaterweather.jpg'
import cactus from './cactusblossom.jpg'
import peach from './peach.jpg'
import perfect from './perfectpeony.jpg'
import limon from './limoncello.jpg'
import pom from './pom.jpg'
import cuc from './cucumber.jpg'

// This component serves as the parent component to all other
// visual elements in child components
class App extends Component{
  // Setting up state to include all products and relevant information
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {id: "0", name:"Fresh Balsalm", cost:9, size:"1", season:"Winter", burntime:"2", pic: balsalm},
        {id: "1", name:"Flannel", cost:14, size:"3", season:"Winter", burntime:"4", pic: flannel},
        {id: "2", name:"Frosted Cranberry", cost:24, size:"3", season:"Winter", burntime:"5", pic: cran},
        {id: "3", name:"Vanilla Bean", cost:12, size:"1", season:"Fall", burntime:"3", pic: vanilla},
        {id: "4", name:"Pumpkin Clove", cost:14, size:"3", season:"Fall", burntime:"4", pic: pumpkin},
        {id: "5", name:"Sweater Weather", cost:24, size:"3", season:"Fall", burntime:"5", pic: sweater},
        {id: "6", name:"Cactus Blossom", cost:9, size:"1", season:"Spring", burntime:"2", pic:cactus},
        {id: "7", name:"Peach Bellini", cost:14, size:"3", season:"Spring", burntime:"4", pic:peach},
        {id: "8", name:"Perfect Peony", cost:24, size:"3", season:"Spring", burntime:"5", pic:perfect},
        {id: "9", name:"Limoncello", cost:12, size:"1", season:"Summer", burntime:"3", pic:limon},
        {id: "10", name:"Pomegranate Lemonade", cost:14, size:"3", season:"Summer", burntime:"4", pic:pom},
        {id: "11", name:"Cucumber Melon", cost:24, size:"3", season:"Summer", burntime:"5", pic:cuc}
      ]
    }
  }
  // Renders the App component, passing the product options to the filteredlist component
  render(){
    return (
      <div className="App">
        <FilteredList list={this.state.options}/>
      </div>
    );
  }
}


export default App;
