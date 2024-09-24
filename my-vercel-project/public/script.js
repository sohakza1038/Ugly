document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Invalid credentials!');
    }
  })
  .then(data => showMessage(data, 'success'))
  .catch(error => showMessage(error.message, 'error'));
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      return response.text();
    } else if (response.status === 409) {
      throw new Error('Username already exists!');
    } else {
      throw new Error('Signup failed!');
    }
  })
  .then(data => showMessage(data, 'success'))
  .catch(error => showMessage(error.message, 'error'));
});

function showMessage(message, type) {
  const messageBox = document.getElementById('message');
  messageBox.textContent = message;
  messageBox.className = `message ${type}`;
  messageBox.style.display = 'block';

  setTimeout(() => {
    messageBox.classList.add('hidden');
  }, 3000); // 3초 후 메시지 숨김
}
