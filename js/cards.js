// import projects
import projects from './projects.min.js';

// Create new Card
const cardTemplate = (id, {name, cardDesc, tech}) => {
  return `
  <div class="card modal-btn" id='${id}' tabIndex='0'>
    <div class="container">
      <h3>${name}</h3>
      <p>${cardDesc}</p>
      <p>
        <b>Utilized</b>: ${tech}
      </p>
    </div>
  </div>`;
}

const linkTemplate = (label, link) => `<div class="project-link">Link: <a href=${link} target="_blank">${label}</a><div>`;

const setModalContent = ({name, modalImg, modalDesc, links}) => {
  const modalHeader = document.getElementById('modalHeader');
  const modalImage = document.getElementById('modalImage');
  const modalContent = document.getElementById('modalContent');
  const modalDescription = document.getElementById('modalDescription');

  modalHeader.textContent = name;
  modalImage.src = modalImg;

  for(let desc of modalDesc) {
    let newDecs = document.createElement('li');
    newDecs.textContent = desc;
    modalDescription.appendChild(newDecs);
  }

  if(links) {
    for(let currLink of links) {
      const { label, link } = currLink;
      let anchorLink = linkTemplate(label, link);
      modalContent.innerHTML += anchorLink;
    }
  }
}

function openModal() {
  const modal = document.getElementsByClassName('modal')[0];

  if(!modal.classList.contains('show')) {
    modal.classList.add('show');
    setModalContent(projects[this.id]);
  }
}

function closeModal() {
  const modal = document.getElementsByClassName('modal')[0];
  const modalHeader = document.getElementById('modalHeader');
  const modalImage = document.getElementById('modalImage');
  const modalContent = document.getElementById('modalContent');
  const modalDescription = document.getElementById('modalDescription');

  if(modal.classList.contains('show')) {
    modal.classList.remove('show');
    modalHeader.textContent = '';
    modalImage.src = '';

    while (modalDescription.firstChild) {
      modalDescription.removeChild(modalDescription.firstChild);
    }

    const projectLinks = document.getElementsByClassName("project-link");
    while (projectLinks.length > 0) {
      projectLinks[0].remove();
    }
  }
}

function addListeners() {
  const cards = document.getElementsByClassName('card');
  const modalOverlay = document.getElementById('overlay');
  const modalCloseButton = document.getElementById('close');

  for(let card of cards) {
    card.addEventListener('click', openModal);
    card.addEventListener('keyup', event => event.key === 'Enter' && openModal(event));
  }
    
  modalOverlay.addEventListener('click', closeModal);
  modalCloseButton.addEventListener('click', closeModal);
}

// Generate Project Cards
export default function generateProjectCards() {
  const professional = document.getElementById('professional');
  const personal = document.getElementById('personal');

  for(let project in projects) {
    let currCard = cardTemplate(project, projects[project]);
    if(projects[project].type === 'professional') {
      professional.innerHTML += currCard;
    } else {
      personal.innerHTML += currCard;
    }
  }

  addListeners();
}

// For testing, not included in minified file
module.exports = {
  cardTemplate,
  linkTemplate,
  setModalContent,
  openModal,
  closeModal,
  generateProjectCards,
  addListeners,
  projects,
};