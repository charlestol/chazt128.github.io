const {
    cardTemplate,
    linkTemplate,
    setModalContent,
    openModal,
    closeModal,
    generateProjectCards,
    addListeners,
    projects
} = require('./cards');

test('All project cards displayed', () => {
    document.body.innerHTML = portfolioBody;
    generateProjectCards();

    const projectsLen = Object.keys(projects).length;
    const projectCardsLen = document.querySelectorAll('.card').length;

    expect(projectCardsLen).toEqual(projectsLen);
});

test('Adding content to modal', () => {
  document.body.innerHTML = portfolioBody;

  const projectData = projects['arrayMakerCard'];
  const projectHeader = projectData.name;
  const projectImage = projectData.modalImg;
  const projectDescriptionLen = projectData.modalDesc.length;
  const projectLinksLen = projectData.links.length;

  setModalContent(projectData);

  const modalHeader = document.getElementById('modalHeader').textContent;
  const modalImage = document.getElementById('modalImage').src;
  const modalDescriptionLen = document.querySelectorAll('#modalDescription li').length;
  const modalLinksLen = document.querySelectorAll('.project-link').length;

  expect(modalHeader).toEqual(projectHeader);
  expect(modalImage).toEqual(
    expect.stringContaining(projectImage),
  );
  expect(modalDescriptionLen).toEqual(projectDescriptionLen);
  expect(modalLinksLen).toEqual(projectLinksLen);
});

test('Modal content set on card click', () => {
  document.body.innerHTML = portfolioBody;
  generateProjectCards();

  let projectData = projects['seekItCard'];
  let projectHeader = projectData.name;
  let firstProjectDescription = projectData.modalDesc[0];

  document.getElementById('seekItCard').click();

  const modalHeader = document.getElementById('modalHeader').textContent;
  const firstModalDescription = document.querySelector('#modalDescription li').textContent;

  expect(modalHeader).toEqual(projectHeader);
  expect(firstModalDescription).toEqual(firstProjectDescription);
});

const portfolioBody = `<div id="portfolio">
<h1>Portfolio</h1>
<div class="modal slide-effect">
  <div class="modal-content">
    <h4 id="modalHeader">Modal Dialog</h4>
    <button type="button" id="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div>
      <div>
        <img id="modalImage" src="" alt="" />
      </div>
      <div id="modalContent">
        <ul id="modalDescription"></ul>
      </div>
    </div>
  </div>
</div>
<div id="overlay"></div>
<div id="cardDeck">
  <div id="professional">
    <h2>Professional</h2>
  </div>
  <div id="personal">
    <h2>Personal</h2>
  </div>
</div>          
</div>`;