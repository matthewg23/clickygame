import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };



  handleClick = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state

    console.log(event.target);
    const {value, name } = event.target;
    console.log(event.target.alt + ":" + this.state.score);
    console.log(event.target.clickedonce);
    this.setState({
      [name]: value,
      score: this.state.score + 1
    });
    console.log("score" + ": " + this.state.score);
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Picture Game</Title>
        {this.state.friends.map(picture => (
          <FriendCard
            onClick = {this.handleClick}
            id={picture.id}
            key={picture.id}
            value={picture.clickedonce}
            name={picture.name}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
