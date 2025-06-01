function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    if (username === "Babu" && password === "01-03-2025") {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("mainContent").style.display = "flex";
      document.getElementById("surpriseBtn").style.display = "block";
    } else {
      message.style.display = "block";
      setTimeout(() => { message.style.display = "none"; }, 5000);
    }
  }

  let currentX = 0;
  let currentY = 0;
  
  function rotateCube(face, captionText) {
    switch(face) {
      case 'front': currentX = 0; currentY = 0; break;
      case 'back': currentX = 0; currentY = 180; break;
      case 'right': currentX = 0; currentY = 90; break;
      case 'left': currentX = 0; currentY = -90; break;
      case 'top': currentX = -90; currentY = 0; break;
      case 'bottom': currentX = 90; currentY = 0; break;
    }
    document.getElementById('cube').style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    document.getElementById('cubeCaption').innerText = captionText;
  }
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    document.getElementById('heartContainer').appendChild(heart);
    setTimeout(() => { heart.remove(); }, 8000);
  }, 600);
  
  function togglePassword() {
    const passwordField = document.getElementById("password");
    const eye = document.querySelector(".toggle-password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eye.textContent = "🙈";
    } else {
      passwordField.type = "password";
      eye.textContent = "👁️";
    }
  }
  
  function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }

  document.getElementById('surpriseBtn').addEventListener('click', function() {
    window.location.href = "letter.html";
  });
