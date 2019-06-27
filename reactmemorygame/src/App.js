import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    images,
    score: 0,
    topscore: 0
  };

  this.handleOnClick = this.handleOnClick.bind(this);
} 

  shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

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

  handleOnClick = id => {
    //grabs the id of the image object that was clicked
    let clickedImage = this.state.images.filter(image => image.id === id)[0];

    let alreadyBeenClicked = this.state.images.filter(
      image => image.clicked === true
    );
    console.log(clickedImage);

    if (!clickedImage.clicked) {
      clickedImage.clicked = true;
      this.shuffleArray(images);

      // updates the users score and topscore based on if current score is higher than previous top score
      this.setState({
        score: this.state.score + 1,
        topscore:
          this.state.score + 1 > this.state.topscore
            ? this.state.score + 1
            : this.state.topscore
      });
    

    // if the user beats the game, shuffle the images and reset the game by setting all images.clicked back to false
    if (this.state.score === 11) {
      this.setState({
        score: 0
      });

      this.shuffleArray(images);

      alreadyBeenClicked.forEach(image => {
        image.clicked = false;
      });
    }
    } else {
      alreadyBeenClicked.forEach(image => {
        image.clicked = false;
      });

      this.shuffleArray(images);

      this.setState({
        score: 0
      });
    }
  };

  render() {
    return (
      <>
        <Navbar score={this.state.score} topscore={this.state.topscore} />

        <Header />
        <Wrapper>
          {this.state.images.map(card => (
            <ImageCard
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
              handleOnClick={this.handleOnClick}
            />
          ))}
        </Wrapper>

        <Footer />
      </>
    );
  }
}
export default App;
