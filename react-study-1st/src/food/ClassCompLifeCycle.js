import React from 'react';

class ClassCompLifeCycle extends React.component {
  /*
  constructor -> render -> componentDidMount
  setState -> render(재실행) -> componentDidUpdate
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    } */

  // state의 항목은 되도록이면 미리 정의하는 편을 권장.
  state = {
    isLoading: true,
    data: [], // fetch나 axios 등으로 가져 온 데이터를 저장할 배열
  };

  componentDidMount() {
    // render 이후
    this.setState({ isLoading: false });
  }

  componentDidUpdate() {
    // setState 이후 rendert 실행 이후
  }

  componentWillUnmount() {
    // 컴포넌트가 화면에서 떠날 때
  }

  render() {
    const { isLoading } = this.state;
    return (
      <strong>{isLoading ? 'Loading now...' : 'Loading Completed'}</strong>
    );
  }
}

export default ClassCompLifeCycle;
