// server.js (Node.js)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // 정적 파일 제공

// 로그인 처리
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'testuser' && password === '1234') {
    res.status(200).send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials!');
  }
});

// 회원가입 처리
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  
  res.status(200).send('Signup successful!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
