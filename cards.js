// import projects
import projects from './projects.js';

// Get DOM Elements
const cardDeck = document.getElementById('cardDeck');

// Create new Card
const newCard = ({name, description, tech}) => `<div class="card modal-btn"><div class="container"><h2>${name}</h2><p>${description}</p><p class="card-tech"><b>Utilized</b>: ${tech}</p></div></div>`;

// Generate Project Cards
for(let project of projects) {
  cardDeck.innerHTML += newCard(project);
}