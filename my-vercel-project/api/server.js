const express = require('express');
const app = express();

app.use(express.json());

// 간단한 메모리 기반 유저 데이터 저장소 (데이터베이스 대신 사용)
const users = [];

// 회원가입 처리
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;

  // 닉네임 중복 체크
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    return res.status(409).send('Username already exists!');
  }

  // 새로운 유저 추가
  users.push({ username, password });
  return res.status(200).send('Signup successful!');
});

// 로그인 처리
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // 유저가 존재하는지 체크
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).send('Invalid username or password!');
  }

  // 로그인 성공
  return res.status(200).send('Login successful!');
});

module.exports = app;
