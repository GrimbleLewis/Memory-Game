import React from "react";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images.json";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      
        <Header />
        <Wrapper>
        <ImageCard image={images[0].image} />
        <ImageCard image={images[1].image} />
        <ImageCard image={images[2].image} />
        <ImageCard image={images[3].image} />
        <ImageCard image={images[4].image} />
        <ImageCard image={images[5].image} />
        <ImageCard image={images[6].image} />
        <ImageCard image={images[7].image} />
        <ImageCard image={images[8].image} />
        <ImageCard image={images[9].image} />
        <ImageCard image={images[10].image} />
        <ImageCard image={images[11].image} />
        
        </Wrapper>
        <Footer />
        
    </>
  );
}

export default App;
