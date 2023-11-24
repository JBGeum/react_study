import React, { useState } from 'react';

// 함수 컴포넌트를 이용한 state 사용
// state를 update할 때는 setter 함수를 사용한다
// 배열, 객체의 경우 사본에 값을 update 한 후 사본의 상태를 setter 함수로 업데이트 한다
const Say = () => {
  // useState 인자 안에 초기값(객체 이외라도 ok)
  // 반환배열의 첫번째 원소는 현재 상태, 두 번째 원소는 Setter 함수
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  // useState는 컴포넌트 내에서 여러 번 쓸 수 있음
  const [color, setColor] = useState('black');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/*
      style={{color: color}}과 동일
      style={{color: textColor}} 위에서 color 대신 다른 변수명을 사용했다면 이렇게 명시적으로 선언할 수도 있다
      style={{ color, backgroundColor: 'blue' }}와 같이도 사용가능
      */}
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
