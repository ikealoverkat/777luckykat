import './style.css'

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('contacticon');
      const myDiv = document.getElementById('contactopen');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('hidden');
      });
    }); //contact open/close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('contactclose');
      const myDiv = document.getElementById('contactopen');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('hidden');
      });
    }); //contact close button but inside the popup

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('musicicon');
      const myDiv = document.getElementById('musicopen');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('invisible');
      });
    }); //music open/close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('musicclose');
      const myDiv = document.getElementById('musicopen');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('invisible');
      });
    }); //music close button but inside the popup

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('top5artists-click');
      const myDiv = document.getElementById('top5artists');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('hidden');
      });
    }); //top 5 artists open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('top5artistsclose');
      const myDiv = document.getElementById('top5artists');

      toggleButton.addEventListener('click', function() {
        myDiv.classList.toggle('hidden');
      });
    }); //top 5 artists x close button


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

//music div draggable
    // Assuming you have a div with id="musicopen"
const musicDraggable = document.getElementById('musicopen');

let isDraggingMusic = false;
let musiccurrentX;
let musiccurrentY;
let musicinitialX;
let musicinitialY;
let musicxOffset = 0;
let musicyOffset = 0;

musicDraggable.addEventListener('mousedown', musicdragStart);
document.addEventListener('mouseup', musicdragEnd);
document.addEventListener('mousemove', musicdrag);

function musicdragStart(e) {
  musicinitialX = e.clientX - musicxOffset;
  musicinitialY = e.clientY - musicyOffset;

  if (e.target === musicDraggable) {
    isDraggingMusic = true;
  }
}

function musicdragEnd(e) {
  musicinitialX = musiccurrentX;
  musicinitialY = musiccurrentY;
  isDraggingMusic = false;
}

function musicdrag(e) {
  if (!isDraggingMusic) return;

  e.preventDefault();

  musiccurrentX = e.clientX - musicinitialX;
  musiccurrentY = e.clientY - musicinitialY;

  musicxOffset = musiccurrentX;
  musicyOffset = musiccurrentY;

  musicsetTranslate(musiccurrentX, musiccurrentY, musicDraggable);
}

function musicsetTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}