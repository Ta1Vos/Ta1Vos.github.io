const menuButtons = document.querySelectorAll(`.menu-btn`);

const main = document.querySelector('main');

let animationRunning = false;

//Puts eventlistener on every page button
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener(`click`, function() {
        pageChange(`page-${i}`);
    });
}

//The page change animation(the swipe), also loads the content.
function pageChange(pageName) {
    if (animationRunning == false) {
        animationRunning = true;

        main.classList.add(`page-transition-out`);

        setTimeout(() => {
            main.classList.remove(`page-transition-out`);
            //Load the page content
            loadPageContent(pageName);

            main.classList.add(`page-transition-in`);
            setTimeout(() => {
                main.classList.remove(`page-transition-in`);
                animationRunning = false;
            }, 1490);
        }, 1490);
    }
}

//Show the content for the right page, beware that it has to be a valid class!
function loadPageContent(pageClass) {
    const page = document.querySelector(`.${pageClass}`);

    if (!page) {
        loadPageContent('home-page');
        return;
    }

    const pages = document.querySelectorAll('.page');

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.add(`page-invisible`);
    }

    page.classList.remove(`page-invisible`);
}