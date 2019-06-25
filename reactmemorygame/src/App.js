import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    images,
    score: 0,
    topscore: 0
  };


  shuffleArray = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  render() {
    return (
      <>
        <Navbar 
        score={this.state.score}
        topscore={this.state.topscore}/>

        <Header />
        <Wrapper>
          {this.state.images.map(card => (
            <ImageCard
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              shuffleArray={this.shuffleArray}
            />
          ))}
        </Wrapper>

        <Footer />
      </>
    );
  }
}
export default App;
