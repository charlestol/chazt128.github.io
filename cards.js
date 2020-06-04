// import projects
import projects from './projects.js';

// Get DOM Elements
const cardDeck = document.getElementById('cardDeck');

// Create new Card
const cardTemplate = (id, {name, cardDesc, tech}) => {
  return `
  <div class="card modal-btn" id='${id}' tabIndex='0'>
    <div class="container">
      <h2>${name}</h2>
      <p>${cardDesc}</p>
      <p>
        <b>Utilized</b>: ${tech}
      </p>
    </div>
  </div>`;
}

// Generate Project Cards
for(let project in projects) {
  cardDeck.innerHTML += cardTemplate(project, projects[project]);
}

const cards = document.getElementsByClassName('card');
const modal = document.getElementsByClassName('modal')[0];
const modalOverlay = document.getElementById('overlay');
const modalCloseButton = document.getElementById('close');
const modalHeader = document.getElementById('modalHeader');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');

const setModalContent = ({name, modalImg, modalDesc}) => {
  modalHeader.textContent = name;
  modalImage.src = modalImg;
  for(let desc of modalDesc) {
    let newDecs = document.createElement('li');
    newDecs.textContent = desc;
    modalDescription.appendChild(newDecs);
  }
}

function openModal({target}) {
  if(!modal.classList.contains('show')) {
    modal.classList.add('show');
    setModalContent(projects[target.id || this.id]);
  }
}

function closeModal() {
  if(modal.classList.contains('show')) {
    modal.classList.remove('show');
    modalDescription.innerHTML = '';
  }
}

for(let card of cards) {
  let currModal = modal.cloneNode(true);
  currModal.innerHTML += 'YES'
  card.addEventListener('click', openModal);
  card.addEventListener('keyup', event => event.key === 'Enter' && openModal(event));
}

modalOverlay.addEventListener('click', closeModal);
modalCloseButton.addEventListener('click', closeModal);
