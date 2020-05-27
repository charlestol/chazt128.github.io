let aboutTab = document.getElementById('aboutTab');
let portfolioTab = document.getElementById('portfolioTab');

let aboutContent = document.getElementById('about');
let portfolioContent = document.getElementById('portfolio');

let toggleContent = tab => {
    let aboutClasses = aboutContent.classList;
    let portfolioClasses = portfolioContent.classList;

    let aboutTabClasses = aboutTab.classList;
    let portfolioTabClasses = portfolioTab.classList;

    if(tab === 'About') {
        if(aboutClasses.contains('hide')) {
            // toggle content
            aboutClasses.remove('hide');
            portfolioClasses.add('hide');
            // update active tab
            aboutTabClasses.add('active');
            portfolioTabClasses.remove('active');
            // update URL Path to current tab
            // history.pushState(null, '', '/'); 
        }
    } else {
        if(portfolioClasses.contains('hide')) {
            // toggle content
            portfolioClasses.remove('hide');
            aboutClasses.add('hide');
            // update active tab
            portfolioTabClasses.add('active');
            aboutTabClasses.remove('active');
            // update URL Path to current tab
            // history.pushState(null, '', '/portfolio'); 
        } 
    }
}

if(window.location.hash === '#portfolio')
    toggleContent('Portfolio');

aboutTab.addEventListener("click", e => toggleContent(e.target.textContent));
portfolioTab.addEventListener("click", e => toggleContent(e.target.textContent));
