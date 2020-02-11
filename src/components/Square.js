import React from "react";
import styled from "styled-components";
import "./Square.css";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.onChangeListener = this.onChangeListener.bind(this);

    this.state = {
      elementId: this.props.elementId,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false
    };
  }

  //by clicking on element className changed to 'true', and plugin CSS-style
  clickHandler(id) {
    if (id === 1) {
      this.setState({ selected1: true }, () => {
        this.onChangeListener();
        // console.log(this.state);
      });
      this.bordersPainter1_3();
    }
    if (id === 2) {
      this.setState({ selected2: true }, () => {
        this.onChangeListener();
        // console.log(this.state);
      });
      this.bordersPainter2_4();
    }
    if (id === 3) {
      this.setState({ selected3: true }, () => {
        this.onChangeListener();
        // console.log(this.state);
      });
      this.bordersPainter3_1();
    }
    if (id === 4) {
      this.setState({ selected4: true }, () => {
        this.onChangeListener();
        // console.log(this.state);
      });
      this.bordersPainter4_2();
    }
  }
  bordersPainter1_3() {
    if (this.state.elementId) {
      this.props.squareUpdate(this.state.elementId - 1, 3);
    }
  }

  bordersPainter2_4() {
    switch (this.state.elementId) {
      case 0:
      case 24:
        this.props.squareUpdate(this.state.elementId - 2, 4);
        break;
      case 5:
      case 6:
      case 7:
      case 21:
      case 22:
      case 23:
        this.props.squareUpdate(this.state.elementId - 4, 4);
        break;
      default:
        this.props.squareUpdate(this.state.elementId - 6, 4);
    }
  }

  bordersPainter3_1() {
    if (this.state.elementId) {
      this.props.squareUpdate(this.state.elementId + 1, 1);
    }
  }

  bordersPainter4_2() {
    switch (this.state.elementId) {
      case 0:
      case 22:
        this.props.squareUpdate(this.state.elementId + 2, 2);
        break;
      case 1:
      case 2:
      case 3:
      case 17:
      case 18:
      case 19:
        this.props.squareUpdate(this.state.elementId + 4, 2);
        break;
      default:
        this.props.squareUpdate(this.state.elementId + 6, 2);
    }
  }

  //as soon as changes (to true) occur in state of all 4 elements, testing the 5th element for "false"
  //with changing the state to "true" and subsequent CSS plug in
  onChangeListener() {
    if (
      this.state.selected1 &&
      this.state.selected2 &&
      this.state.selected3 &&
      this.state.selected4
    ) {
      if (!this.state.selected5) {
        this.setState(
          {
            selected5: true
          },
          () => {
            this.onChangeListener();
          }
        );
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    if (this.props.elementLine !== nextProps.elementLine) {
      return true;
    } else {
      return false;
    }
  }

  //вызывается каждым квадратом когда что то поменялось в стейте
  componentDidUpdate(props, state) {
    //каждый квадрат проверяет он ли тот квадрат который нужно покрасить,
    // сравнивая свой ID (elementID) с ID  квадрата который нужно покрасить (colorElId)
    if (this.props.elementId === this.props.colorElId) {
      if (this.props.elementLine === 1) {
        if (this.state.selected1 !== true) {
          this.setState(
            {
              selected1: true
            },
            () => {
              this.onChangeListener();
            },
            console.log(this.state)
          );
        }
      }
      if (this.props.elementLine === 2) {
        if (this.state.selected2 !== true) {
          this.setState(
            {
              selected2: true
            },
            () => {
              this.onChangeListener();
            },
            console.log(this.state)
          );
        }
      }
      if (this.props.elementLine === 3) {
        if (this.state.selected3 !== true) {
          this.setState(
            {
              selected3: true
            },
            () => {
              this.onChangeListener();
            },
            console.log(this.state)
          );
        }
      }
      if (this.props.elementLine === 4) {
        if (this.state.selected4 !== true) {
          this.setState(
            {
              selected4: true
            },
            () => {
              this.onChangeListener();
            },
            console.log(this.state)
          );
        }
      }
    }
  }

  render() {
    //############### POSITION & STYLES ##############################

    const Div = styled.div`
      position: relative;
      width: 130px;
      height: 130px;
      display: inline-block;
    `;
    const Rect = styled.rect`
      position: absolute;
      width: 100px;
      height: 100px;
      left: 15px;
      top: 15px;
    `;
    const Line1 = styled.line`
      position: absolute;
      left: -43px;
      top: 56px;
      width: 100px;
      height: 15px;
      border: 1px solid #5c8ca3;
      transform: rotate(90deg);
    `;
    const Line2 = styled.line`
      position: absolute;
      width: 100px;
      height: 15px;
      left: 15px;
      top: 0px;
      border: 1px solid #5c8ca3;
    `;

    const Line3 = styled.line`
      position: absolute;
      width: 100px;
      height: 15px;
      left: 71px;
      top: 56px;

      border: 1px solid #5c8ca3;
      transform: rotate(90deg);
    `;

    const Line4 = styled.line`
      position: absolute;
      width: 100px;
      height: 15px;
      left: 15px;
      top: 115px;

      border: 1px solid #5c8ca3;
    `;

    //######################################################
    return (
      <Div>
        <Rect className={this.state.selected5 ? "bgcolor" : "default"}> </Rect>{" "}
        <Line1
          className={this.state.selected1 ? "bgcolor" : "default"}
          onClick={!this.state.selected1 ? () => this.clickHandler(1) : null}
        ></Line1>{" "}
        <Line2
          className={this.state.selected2 ? "bgcolor" : "default"}
          onClick={!this.state.selected2 ? () => this.clickHandler(2) : null}
        ></Line2>{" "}
        <Line3
          className={this.state.selected3 ? "bgcolor" : "default"}
          onClick={!this.state.selected3 ? () => this.clickHandler(3) : null}
        ></Line3>{" "}
        <Line4
          className={this.state.selected4 ? "bgcolor" : "default"}
          onClick={!this.state.selected4 ? () => this.clickHandler(4) : null}
        ></Line4>{" "}
      </Div>
    );
  }
}
export default Square;
