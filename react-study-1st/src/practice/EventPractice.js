import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력해주세요"
          onChange={e => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
