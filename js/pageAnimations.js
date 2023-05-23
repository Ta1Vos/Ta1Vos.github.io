const menuButtons = document.querySelectorAll(`.menu-btn`);

const main = document.querySelector('main');

let animationRunning = false;
let currentPage = 0;

//Puts eventlistener on every page button
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener(`click`, function() {
        pageChange(`page-${i}`, i);
    });
}

//The page change animation(the swipe), also loads the content.
function pageChange(pageName, pageNumber) {
    if (animationRunning == false) {
        animationRunning = true;
        
        //Looks whether the page has to scroll left or right
        if (currentPage > pageNumber) {
            main.classList.add(`page-transition-right-out`);

            setTimeout(() => {
                //Load the page content
                loadPageContent(pageName);
    
                main.classList.add(`page-transition-left-in`);
                setTimeout(() => {
                    main.classList.remove(`page-transition-right-out`);
                    main.classList.remove(`page-transition-left-in`);
                    animationRunning = false;
                }, 1500);
            }, 1495);
        } else {
            main.classList.add(`page-transition-left-out`);

            setTimeout(() => {
                //Load the page content
                loadPageContent(pageName);
    
                main.classList.add(`page-transition-right-in`);
                setTimeout(() => {
                    main.classList.remove(`page-transition-left-out`);
                    main.classList.remove(`page-transition-right-in`);
                    animationRunning = false;
                }, 1500);
            }, 1495);
        }

        currentPage = pageNumber;
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

    setTimeout(() => {
        page.classList.remove(`page-invisible`);
    }, 50);
}