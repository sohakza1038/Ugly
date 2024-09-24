document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.text())
  .then(data => showMessage(data, 'success'))
  .catch(() => showMessage('Login failed!', 'error'));
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
  .then(response => response.text())
  .then(data => showMessage('Signup successful!', 'success'))
  .catch(() => showMessage('Signup failed!', 'error'));
});

function showMessage(message, type) {
  const messageBox = document.getElementById('message');
  messageBox.textContent = message;
  messageBox.className = `message ${type}`;
  messageBox.style.display = 'block';

  setTimeout(() => {
    messageBox.classList.add('hidden');
  }, 3000);
}
