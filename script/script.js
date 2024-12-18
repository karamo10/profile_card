const follower = document.getElementById('follower');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let targetX = mouseX;
let targetY = mouseY;

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function moveFollower() {
  mouseX += (targetX - mouseX) * 0.1;
  mouseY += (targetY - mouseY) * 0.1;

  follower.style.left = `${mouseX}px`;
  follower.style.top = `${mouseY}px`;

  requestAnimationFrame(moveFollower);
}

moveFollower();