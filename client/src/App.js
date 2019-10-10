import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(card => {
      card.clickedonce = 0;
    });
    alert(`Game Over \nScore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }


  clickCount = (id) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if(friends[i].clickedonce === 0){
          friends[i].clickedonce = friends[i].clickedonce + 1;
          this.setState({score: this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
    // console.log(event.target);
    // const {value, name } = event.target;
    // console.log(event.target.alt + ":" + this.state.score);
    // console.log(event.target.clickedonce);
    // this.setState({
    //   [name]: value,
    //   score: this.state.score + 1
    // });
    // console.log("score" + ": " + this.state.score);
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Picture Game | Score: {this.state.score} | Highscore: {this.state.highscore}</Title>
        {this.state.friends.map(picture => (
          <FriendCard
            clickCount = {this.clickCount}
            id={picture.id}
            key={picture.id}
            name={picture.name}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
