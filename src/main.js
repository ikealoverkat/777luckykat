import './style.css'

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('contacticon');
      const myDiv = document.getElementById('contactopen');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('hidden');
      });
    });

    // Assuming you have a div with id="myDraggable"
const myDraggable = document.getElementById('contactopen');

let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

myDraggable.addEventListener('mousedown', dragStart);
document.addEventListener('mouseup', dragEnd);
document.addEventListener('mousemove', drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === myDraggable) {
    isDragging = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
}

function drag(e) {
  if (!isDragging) return;

  e.preventDefault();

  currentX = e.clientX - initialX;
  currentY = e.clientY - initialY;

  xOffset = currentX;
  yOffset = currentY;

  setTranslate(currentX, currentY, myDraggable);
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}