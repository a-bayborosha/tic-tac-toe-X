import React from "react";
//import Element from './Element.js'
import Square from "./Square.js";

class Board extends React.Component {
  renderElement(elementId) {
    return (
      <Square
        elementId={elementId}
        colorElId={this.state.colorElId}
        elementLine={this.state.elementLine}
        squareUpdate={this.squareUpdate.bind(this)}
      />
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      elementId: 0,
      elementLine: 0,
      colorElId: 2
    };
  }

  //(square that must be colored, line that must be colored)
  squareUpdate(colorElId, elementLine) {
    this.setState({
      colorElId,
      elementLine
    });
  }

  render() {
    return (
      <div
        className="Board"
        style={{
          textAlign: "center",
          marginTop: 100,
          marginLeft: 100,
          float: "left"
        }}
      >
        <div className="board-row"> {this.renderElement(0)} </div>
        <div className="board-row">
          {" "}
          {this.renderElement(1)} {this.renderElement(2)}{" "}
          {this.renderElement(3)}{" "}
        </div>
        <div className="board-row">
          {" "}
          {this.renderElement(4)} {this.renderElement(5)}{" "}
          {this.renderElement(6)} {this.renderElement(7)}{" "}
          {this.renderElement(8)}{" "}
        </div>
        <div className="board-row">
          {" "}
          {this.renderElement(9)} {this.renderElement(10)}{" "}
          {this.renderElement(11)} {this.renderElement(12)}{" "}
          {this.renderElement(13)} {this.renderElement(14)}{" "}
          {this.renderElement(15)}{" "}
        </div>
        <div className="board-row">
          {" "}
          {this.renderElement(16)} {this.renderElement(17)}{" "}
          {this.renderElement(18)} {this.renderElement(19)}{" "}
          {this.renderElement(20)}{" "}
        </div>
        <div className="board-row">
          {" "}
          {this.renderElement(21)} {this.renderElement(22)}{" "}
          {this.renderElement(23)}{" "}
        </div>
        <div className="board-row"> {this.renderElement(24)} </div>{" "}
      </div>
    );
  }
}

export default Board;
