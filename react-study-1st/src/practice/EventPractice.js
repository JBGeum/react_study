import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  constructor(props) {
    super(props);
    // 메서드 바인딩은 생성자 메서드에서 하는것이 정석.
    // this는 호출부에 따라 결정되므로 binding 필요.
    this.handleClick = this.handleClick.bind(this);
  }

  // 이벤트 처리 시, 렌더링과 동시에 함수를 만들어서 전달해도 좋고 미리 준비해 전달해도 좋다.
  handleClick() {
    alert(`${this.state.username}: ${this.state.message}`);
    this.setState({
      username: '',
      message: '',
    });
  }

  // babel의 transform-class-properties 사용(화살표 함수로 표현, 생성자 메서드에서 바인딩 필요 x)
  handleChange = e => {
    this.setState({
      /* 계산된 속성 이름 (Computed Property Names)
      계산된 속성 이름을 사용하면, 객체의 속성 키를 동적으로 생성할 수 있습니다.
      대괄호 [] 안에 표현식을 넣어 해당 표현식의 결과값을 속성의 키로 사용합니다.
      */
      [e.target.name]: e.target.value,
    });
  };

  // onKeyPress는 deprecated 되었으며 대신 onKeyUp, onKeyDown 사용 권장
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />{' '}
        <input
          type="text"
          name="message"
          placeholder="입력해주세요"
          onChange={e => {
            this.setState({
              message: e.target.value,
            });
          }}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
        <button onClick={this.handleClick}>확인2</button>
      </div>
    );
  }
}

export default EventPractice;
