import React, { Component } from 'react';
import Score from "./components/Score";
import Tiles from "./components/Tiles";
import Wrapper from "./components/Wrapper";
import nerdStuff from "./tiles.json";
import './App.css';

class App extends Component {
// Setting json array into an object 
state = {
  nerdStuff,
  clickedNerdIds: [],
  score: 0,
  goal: 10,
  status: ""
};

//shuffle the Tiles when clicked
shuffleScoreTiles = id => {
  let clickedNerdIds = this.state.clickedNerdIds;

  if(clickedNerdIds.includes(id)){
    this.setState({ clickedNerdIds: [], score: 0, status: "Sorry, YOU LOSE! Click to have fun again!"});
    return;
  }
    else{
      clickedNerdIds.push(id)

      if(clickedNerdIds.length === 10){
        this.setState({ score: 10, status: "YOU WON! Nice Work! Think you can do it again! Click to try!", clickedNerdIds: []});
        console.log("You Won");
        return;
      }

      this.setState({ nerdStuff, clickedNerdIds, score: clickedNerdIds.length, status: ""});

      for (let i = nerdStuff.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [nerdStuff[i], nerdStuff[j]] = [nerdStuff[j], nerdStuff[i]];
      }
    }
  }


// render a Tile component for each card object
render() {
  return (
  <div className="App">
    <header className="App-header">
    <h1 className="App-title">Geeky Stuff Clicker Game</h1>
    <p className="App-intro">
      Attempt to only click the same image ONCE! A Scoe of 10, WINS!
    </p>
      </header>
        <Score total={this.state.score}
        goal={10}
        status={this.state.status}
        />
  <Wrapper>
    {this.state.nerdStuff.map(sciFi => (
      <Tiles
        shuffleScoreTiles={this.shuffleScoreTiles}
        id={sciFi.id}
        key={sciFi.key}
        image={sciFi.image}
      />
    ))}
  </Wrapper>
    <footer>
    <p>Built by Jeff Mills.  You can find the code<a href="https://github.com/Fysics7/Click-Game" target="_blank" rel="noopener noreferrer"> here</a>.</p> 
    </footer>
    </div>
    )   
  }
}

export default App;
