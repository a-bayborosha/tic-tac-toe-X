import React from "react";
import styled from "styled-components";
import "./Square.css";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
    this.onChangeListener = this.onChangeListener.bind(this);

    this.state = {
      elementId: this.props,
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
    if (this.props.elementId === 2) {
      this.props.squareUpdate(1, 3);
    }
    if (this.props.elementId === 3) {
      this.props.squareUpdate(2, 3);
    }
    if (this.props.elementId === 5) {
      this.props.squareUpdate(4, 3);
    }
    if (this.props.elementId === 6) {
      this.props.squareUpdate(5, 3);
    }
    if (this.props.elementId === 7) {
      this.props.squareUpdate(6, 3);
    }
    if (this.props.elementId === 8) {
      this.props.squareUpdate(7, 3);
    }
    if (this.props.elementId === 10) {
      this.props.squareUpdate(9, 3);
    }
    if (this.props.elementId === 11) {
      this.props.squareUpdate(10, 3);
    }
    if (this.props.elementId === 12) {
      this.props.squareUpdate(11, 3);
    }
    if (this.props.elementId === 13) {
      this.props.squareUpdate(12, 3);
    }
    if (this.props.elementId === 14) {
      this.props.squareUpdate(13, 3);
    }
    if (this.props.elementId === 15) {
      this.props.squareUpdate(14, 3);
    }
    if (this.props.elementId === 17) {
      this.props.squareUpdate(16, 3);
    }
    if (this.props.elementId === 18) {
      this.props.squareUpdate(17, 3);
    }
    if (this.props.elementId === 19) {
      this.props.squareUpdate(18, 3);
    }
    if (this.props.elementId === 20) {
      this.props.squareUpdate(19, 3);
    }
    if (this.props.elementId === 22) {
      this.props.squareUpdate(21, 3);
    }
    if (this.props.elementId === 23) {
      this.props.squareUpdate(22, 3);
    }
  }

  bordersPainter2_4() {
    if (this.props.elementId === 2) {
      this.props.squareUpdate(0, 4);
    }
    if (this.props.elementId === 5) {
      this.props.squareUpdate(1, 4);
    }
    if (this.props.elementId === 6) {
      this.props.squareUpdate(2, 4);
    }
    if (this.props.elementId === 7) {
      this.props.squareUpdate(3, 4);
    }
    if (this.props.elementId === 10) {
      this.props.squareUpdate(4, 4);
    }
    if (this.props.elementId === 11) {
      this.props.squareUpdate(5, 4);
    }
    if (this.props.elementId === 12) {
      this.props.squareUpdate(6, 4);
    }
    if (this.props.elementId === 13) {
      this.props.squareUpdate(7, 3);
    }
    if (this.props.elementId === 14) {
      this.props.squareUpdate(8, 4);
    }
    if (this.props.elementId === 16) {
      this.props.squareUpdate(10, 4);
    }
    if (this.props.elementId === 17) {
      this.props.squareUpdate(11, 4);
    }
    if (this.props.elementId === 18) {
      this.props.squareUpdate(12, 4);
    }
    if (this.props.elementId === 19) {
      this.props.squareUpdate(13, 4);
    }
    if (this.props.elementId === 20) {
      this.props.squareUpdate(14, 4);
    }
    if (this.props.elementId === 21) {
      this.props.squareUpdate(17, 4);
    }
    if (this.props.elementId === 22) {
      this.props.squareUpdate(18, 4);
    }
    if (this.props.elementId === 23) {
      this.props.squareUpdate(19, 4);
    }
    if (this.props.elementId === 24) {
      this.props.squareUpdate(22, 4);
    }
  }

  bordersPainter3_1() {
    if (this.props.elementId === 1) {
      this.props.squareUpdate(2, 1);
    }
    if (this.props.elementId === 2) {
      this.props.squareUpdate(3, 1);
    }
    if (this.props.elementId === 4) {
      this.props.squareUpdate(5, 1);
    }
    if (this.props.elementId === 5) {
      this.props.squareUpdate(6, 1);
    }
    if (this.props.elementId === 6) {
      this.props.squareUpdate(7, 1);
    }
    if (this.props.elementId === 7) {
      this.props.squareUpdate(8, 1);
    }
    if (this.props.elementId === 9) {
      this.props.squareUpdate(10, 1);
    }
    if (this.props.elementId === 10) {
      this.props.squareUpdate(11, 1);
    }
    if (this.props.elementId === 11) {
      this.props.squareUpdate(12, 1);
    }
    if (this.props.elementId === 12) {
      this.props.squareUpdate(13, 1);
    }
    if (this.props.elementId === 13) {
      this.props.squareUpdate(14, 1);
    }
    if (this.props.elementId === 14) {
      this.props.squareUpdate(15, 1);
    }
    if (this.props.elementId === 16) {
      this.props.squareUpdate(17, 1);
    }
    if (this.props.elementId === 17) {
      this.props.squareUpdate(18, 1);
    }
    if (this.props.elementId === 18) {
      this.props.squareUpdate(19, 1);
    }
    if (this.props.elementId === 19) {
      this.props.squareUpdate(20, 1);
    }
    if (this.props.elementId === 21) {
      this.props.squareUpdate(22, 1);
    }
    if (this.props.elementId === 22) {
      this.props.squareUpdate(23, 1);
    }
  }

  bordersPainter4_2() {
    //if you are in the prime square
    if (this.props.elementId === 0) {
      this.props.squareUpdate(2, 2); //(secondary square, prime square line)
    }
    if (this.props.elementId === 1) {
      this.props.squareUpdate(5, 2);
    }
    if (this.props.elementId === 2) {
      this.props.squareUpdate(6, 2);
    }
    if (this.props.elementId === 3) {
      this.props.squareUpdate(7, 2);
    }
    if (this.props.elementId === 4) {
      this.props.squareUpdate(10, 2);
    }
    if (this.props.elementId === 5) {
      this.props.squareUpdate(11, 2);
    }
    if (this.props.elementId === 6) {
      this.props.squareUpdate(12, 2);
    }
    if (this.props.elementId === 7) {
      this.props.squareUpdate(13, 2);
    }
    if (this.props.elementId === 8) {
      this.props.squareUpdate(14, 2);
    }
    if (this.props.elementId === 10) {
      this.props.squareUpdate(16, 2);
    }
    if (this.props.elementId === 11) {
      this.props.squareUpdate(17, 2);
    }
    if (this.props.elementId === 12) {
      this.props.squareUpdate(18, 2);
    }
    if (this.props.elementId === 13) {
      this.props.squareUpdate(19, 2);
    }
    if (this.props.elementId === 14) {
      this.props.squareUpdate(20, 2);
    }
    if (this.props.elementId === 17) {
      this.props.squareUpdate(21, 2);
    }
    if (this.props.elementId === 18) {
      this.props.squareUpdate(22, 2);
    }
    if (this.props.elementId === 19) {
      this.props.squareUpdate(23, 2);
    }
    if (this.props.elementId === 22) {
      this.props.squareUpdate(24, 2);
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
            this.onChangeListener(),
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
            this.onChangeListener(),
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
            this.onChangeListener(),
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
            this.onChangeListener(),
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

    /*  const Div = styled.div`
                             position: absolute;
                             border 1px solid black;
                             width: 130px;
                             height: 130px;
                             
                             `; */
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
