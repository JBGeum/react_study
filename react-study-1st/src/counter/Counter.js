import React, { Component } from 'react';

// 클래스 컴포넌트를 이용한 state 사용
// state를 update할 때는 setState 함수를 사용한다
class Counter extends Component {
  /* Constructor를 사용하는 state의 초깃값 설정
  constructor(props) {
    super(props);
    //state는 객체형식이어야 함
    this.state = {
      number: 0,
      fixedNumber: 0
    };
  } */

  // Constructor 바깥에서 counter 선언
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log('callBack called');
            }); // 파라미터: (counter, callback)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
            this.setState({ number: this.state.number + 1 }); // counter 값이 바로 바뀌지 않기 때문에 더해지지 않음
          }}
        >
          +2 fail
        </button>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              // prevState는 기존 상태, props는 현재 가진 props
              return { number: prevState.number + 1 };
            });
            this.setState(prevState => ({ number: prevState.number + 1 })); // 인자로 함수를 전달하는 편이 성능 상 바람직함
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

export default Counter;
