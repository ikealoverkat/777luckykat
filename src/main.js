import './style.css'

//sound effect scripts
const clickOne = document.getElementById('click1');
function playOne(){
  clickOne.load();
  clickOne.play();
}

const clickTwo = document.getElementById('click2');
function playTwo(){
  clickTwo.load();
  clickTwo.play();
}

const closeSound = document.getElementById('close');
function playClose(){
  closeSound.load();
  closeSound.play();
}
const hoverSound = document.getElementById('hover');

const hoverableElements = document.querySelectorAll('.hoverable');

hoverableElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    hoverSound.load();
    hoverSound.play();
  });
});

const toolsSound = document.getElementById('hover2');

const toolsElements = document.querySelectorAll('.toolshover');

toolsElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    toolsSound.load();
    toolsSound.play();
  });
});
//sfx end

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('warning-close');
      const myDiv = document.getElementById('warning');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.add('hidden');
      });
    }); //close mobile warning

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('contacticon');
      const myDiv = document.getElementById('contactopen');

      toggleButton.addEventListener('click', function() {
        playOne();
        myDiv.classList.toggle('hidden');
      });
    }); //contact open/close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('contactclose');
      const myDiv = document.getElementById('contactopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //contact close button but inside the popup

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('musicicon');
      const myDiv = document.getElementById('musicopen');

      toggleButton.addEventListener('click', function() {
        playOne();
        myDiv.classList.toggle('invisible');
      });
    }); //music open/close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('musicclose');
      const myDiv = document.getElementById('musicopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('invisible');
      });
    }); //music close button but inside the popup

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('top5artists-click');
      const myDiv = document.getElementById('top5artists');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //top 5 artists open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('top5artistsclose');
      const myDiv = document.getElementById('top5artists');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //top 5 artists x close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('favalbums-click');
      const myDiv = document.getElementById('favalbumsopen');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //fav albums open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('favalbumsclose');
      const myDiv = document.getElementById('favalbumsopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //fav albums close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('spinning-click');
      const myDiv = document.getElementById('spinningopen');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //spin albums open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('spinningclose');
      const myDiv = document.getElementById('spinningopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //spin albums close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('singingyap-icon');
      const myDiv = document.getElementById('singingyap-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //singing yap open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('singingyap-close');
      const myDiv = document.getElementById('singingyap-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //singing yap close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('clarinetyap-icon');
      const myDiv = document.getElementById('clarinetyap-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //clarinet yap open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('clarinetyap-close');
      const myDiv = document.getElementById('clarinetyap-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //clarinet yap close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('pianoyap-icon');
      const myDiv = document.getElementById('pianoyap-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //piano yap open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('pianoyap-close');
      const myDiv = document.getElementById('pianoyap-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //piano yap close button

document.addEventListener('DOMContentLoaded', function () {
  const currentButton = document.getElementById('current-icon');
  const archiveButton = document.getElementById('archive-icon');
  const toolsButton = document.getElementById('tools-icon');

  const currentDiv = document.getElementById('project-current');
  const toolsDiv = document.getElementById('project-tools');
  const archiveDiv = document.getElementById('project-archive');
  const placeholder = document.getElementById('nothingtext');

  let activeDiv = null; // track currently shown div

  function showOnly(targetDiv) {
    // if the clicked div is already shown, hide it and show placeholder
    if (activeDiv === targetDiv) {
      targetDiv.classList.add('hidden');
      placeholder.classList.remove('hidden');
      activeDiv = null;
      return;
    }
    // Otherwise, hide all and show the selected one
    currentDiv.classList.add('hidden');
    archiveDiv.classList.add('hidden');
    toolsDiv.classList.add('hidden');
    placeholder.classList.add('hidden');

    targetDiv.classList.remove('hidden');
    activeDiv = targetDiv;
  }

  currentButton.addEventListener('click', function () {
    playTwo();
    showOnly(currentDiv);
  });

  archiveButton.addEventListener('click', function () {
    playTwo();
    showOnly(archiveDiv);
  });

  toolsButton.addEventListener('click', function () {
    playTwo();
    showOnly(toolsDiv);
  });
}); //project explorer div code

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('projectsicon');
      const myDiv = document.getElementById('projectsopen');

      toggleButton.addEventListener('click', function() {
        playOne();
        myDiv.classList.toggle('hidden');
      });
    }); //project explorer open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('projectsclose');
      const myDiv = document.getElementById('projectsopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //projects close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('articon');
      const myDiv = document.getElementById('artopen');

      toggleButton.addEventListener('click', function() {
        playOne();
        myDiv.classList.toggle('hidden');
      });
    }); //art open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('artclose');
      const myDiv = document.getElementById('artopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //art close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('2022-click');
      const myDiv = document.getElementById('2022-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
        myDiv.classList.toggle('flex');
      });
    }); //2022 toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('2023-click');
      const myDiv = document.getElementById('2023-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
        myDiv.classList.toggle('flex');
      });
    }); //2023 toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('2024-click');
      const myDiv = document.getElementById('2024-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
        myDiv.classList.toggle('flex');
      });
    }); //2024 toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('2025-click');
      const myDiv = document.getElementById('2025-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
        myDiv.classList.toggle('flex');
      });
    }); //2025 toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('miscicon');
      const myDiv = document.getElementById('miscopen');

      toggleButton.addEventListener('click', function() {
        playOne();
        myDiv.classList.toggle('hidden');
      });
    }); //misc open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('miscclose');
      const myDiv = document.getElementById('miscopen');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //misc close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('likesdl-icon');
      const myDiv = document.getElementById('likesdl-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //likesdl open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('likesdl-close');
      const myDiv = document.getElementById('likesdl-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //likesdl close button    

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('blinkies-icon');
      const myDiv = document.getElementById('blinkies-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //blinkies open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('blinkies-close');
      const myDiv = document.getElementById('blinkies-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //blinkies close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('foods-icon');
      const myDiv = document.getElementById('foods-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //foods open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('foods-close');
      const myDiv = document.getElementById('foods-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //foods close button

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('yap-icon');
      const myDiv = document.getElementById('yap-open');

      toggleButton.addEventListener('click', function() {
        playTwo();
        myDiv.classList.toggle('hidden');
      });
    }); //yap open/close toggle

document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('yap-close');
      const myDiv = document.getElementById('yap-open');

      toggleButton.addEventListener('click', function() {
        playClose();
        myDiv.classList.toggle('hidden');
      });
    }); //yap close button

  //draggable window redo because what the hell
let zindexcount = 1;
const draggableElements = document.querySelectorAll('.draggable');
 
 draggableElements.forEach(element => {
  if(!element.style.top) element.style.top = element.offsetTop + "px";
  if(!element.style.left) element.style.left = element.offsetLeft + "px";
  
  dragElement(element);

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event; //checks if e exists, if e exists then e is assigned to itself, but if it does not exist the OR operator evaulates window-event and assigns e window-event
      e.preventDefault();

      zindexcount++;
      elmnt.style.zIndex = zindexcount;

      //get mouse cursor position at startup
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      //call function when the cursor moves
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
     e = e || window.event;
     e.preventDefault();
     //find new cursor position
     pos1 = pos3 - e.clientX
     pos2 = pos4 - e.clientY;
     pos3 = e.clientX;
     pos4 = e.clientY;
     //set element new position
     elmnt.style.top = (parseFloat(elmnt.style.top) - pos2) + "px";
     elmnt.style.left = (parseFloat(elmnt.style.left) - pos1) + "px"; 
    }
    function closeDragElement() {
      //stop moving when mouse released
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
 });

let horizontal = document.getElementById("arcadegallery");
horizontal.addEventListener("wheel", (e)=>{
e.preventDefault();
horizontal.scrollLeft += e.deltaY;
})
let horizontal2 = document.getElementById("peakgallery");
horizontal2.addEventListener("wheel", (e)=>{
e.preventDefault();
horizontal2.scrollLeft += e.deltaY;
})
let horizontal3 = document.getElementById("videogallery");
horizontal3.addEventListener("wheel", (e)=>{
e.preventDefault();
horizontal3.scrollLeft += e.deltaY;
})
let horizontal4 = document.getElementById("vtubergallery");
horizontal4.addEventListener("wheel", (e)=>{
e.preventDefault();
horizontal4.scrollLeft += e.deltaY;
})