import React from "react";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header"

function App() {
  return (
    <>
      <Navbar />
      
        <Header />
        <Wrapper>
        <ImageCard image={images[0].image} />
        </Wrapper>
    </>
  );
}

export default App;
