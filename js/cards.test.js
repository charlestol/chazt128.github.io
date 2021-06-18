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

test('All project cards displayed', () => {
    document.body.innerHTML = portfolioBody;
    generateProjectCards();

    const projectsLen = Object.keys(projects).length;
    const projectCardsLen = document.querySelectorAll('.card').length;
    expect(projectCardsLen).toEqual(projectsLen);
});