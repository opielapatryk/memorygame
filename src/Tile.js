import React from 'react';
import './App.css';
class Tile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: "Apple"};
    }
    toggleValue = () => {
        if(this.state.text === "Apple"){
            this.setState({text: ""});
        }
        else{
            this.setState({text: "Apple"});
        }
      }
    render() {
      return (
        <div className="tile"
        onClick={this.toggleValue} >
                <h1>{this.state.text}</h1>
        </div>
        
      );
    }
  }

  export default Tile;