const nameInput = document.getElementById('name-input');
    const helloMessage = document.getElementById('hello-message');
    const inputDiv = document.getElementById('input-and-button')
    const hiddenContent = document.getElementById('hidden-content-container');
const choiceText = document.getElementById('choice-text');

const doorL = document.getElementById('left-door');
const doorR = document.getElementById('right-door');
let winSrc = 'https://i.etsystatic.com/42692457/r/il/0d1d44/5059346399/il_1588xN.5059346399_nbcl.jpg';
let loseSrc = 'https://content.mycutegraphics.com/graphics/monster/silly-monster.png';


    function inputSequence() {
       const userName = nameInput.value;

    helloMessage.textContent = "Hello, " + userName;
    inputDiv.style.display = "none";
    hiddenContent.style.display = "block";
}

function chooseButton(choice) {
    let correctDoor = Math.floor(Math.random() * 2) + 1;
  
  if (correctDoor == 1 && choice == 'left') {
    choiceText.textContent = 'Left, YOU WIN';
    doorL.style.backgroundImage = "url('https://i.etsystatic.com/42692457/r/il/0d1d44/5059346399/il_1588xN.5059346399_nbcl.jpg')";
    doorR.style.backgroundImage = "url('https://content.mycutegraphics.com/graphics/monster/silly-monster.png')";
  } else if (correctDoor == 2 && choice == 'right') {
    choiceText.textContent = 'Right, YOU WIN';
    doorR.style.backgroundImage = "url('https://i.etsystatic.com/42692457/r/il/0d1d44/5059346399/il_1588xN.5059346399_nbcl.jpg')";
    doorL.style.backgroundImage = "url('https://content.mycutegraphics.com/graphics/monster/silly-monster.png')";
  } else if (correctDoor == 2 && choice == 'left') {
    choiceText.textContent = choice + ", YOU LOSE";
    doorR.style.backgroundImage = "url('https://i.etsystatic.com/42692457/r/il/0d1d44/5059346399/il_1588xN.5059346399_nbcl.jpg')";
    doorL.style.backgroundImage = "url('https://content.mycutegraphics.com/graphics/monster/silly-monster.png')";
  } else if (correctDoor == 1 && choice == 'right') {
    choiceText.textContent = choice + ", YOU LOSE";
    doorL.style.backgroundImage = "url('https://i.etsystatic.com/42692457/r/il/0d1d44/5059346399/il_1588xN.5059346399_nbcl.jpg')";
    doorR.style.backgroundImage = "url('https://content.mycutegraphics.com/graphics/monster/silly-monster.png')";
  }
  
}