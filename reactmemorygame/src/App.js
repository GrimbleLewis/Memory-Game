import React from "react";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

function App() {
    return (
      <Wrapper>
        <ImageCard
        image={images[0].images} 
        />
    </Wrapper>
  );
}

export default App;