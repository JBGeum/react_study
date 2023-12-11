import React, { useState } from 'react';

const EventPracFuc = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  // useState 사용시 문자열 대신 객체 넣기
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { usernameF, messageF } = form;
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);

  const onChangeF = e => {
    const nextForm = {
      ...form, // 스프레드 연산자 (Spread Operator)를 사용해 기존의 form 내용을 이 객체에 복사 후
      [e.target.name]: e.target.value, // 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(`${username}: ${message}`);
    setUsername('');
    setMessage('');
  };
  const onClickF = () => {
    setForm({
      usernameF: '',
      messageF: '',
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />{' '}
      <input
        type="text"
        name="message"
        placeholder="입력해주세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPracFuc;
