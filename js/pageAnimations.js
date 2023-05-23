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

<div class="aboutme-page page-1 page page-invisible">
            <div class="row">
                <div class="col"></div>
                <div class="col-10">
                    <div class="w-25 m-auto bg-brown p-3 rounded-3">
                        <p class="text-center fs-2 fw-bold">
                            About Me
                        </p>
                    </div>
                    <div class="row mt-5 pt-3">
                        <div class="col-5">
                            <div class="rounded-2 bg-light border border-1 border-dark text-center p-4">
                                Lorem ipsum
                            </div>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-4">
                            <img src="image source" class="img-fluid rounded-top" alt="Placeholder">
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>