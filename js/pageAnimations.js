const homeBtn = document.querySelector(`.home-btn`);

const body = document.body;

let animationRunning = false;

homeBtn.addEventListener(`click`, function() {
    pageChange('home-page');
});

//The page change animation(the swipe), also loads the content.
function pageChange(pageName) {
    if (animationRunning == false) {
        animationRunning = true;

        body.classList.add(`page-transition-out`);

        setTimeout(() => {
            body.classList.remove(`page-transition-out`);
            //Load the page content
            loadPageContent(pageName);

            body.classList.add(`page-transition-in`);
            setTimeout(() => {
                body.classList.remove(`page-transition-in`);
                animationRunning = false;
            }, 1490);
        }, 1490);
    }
}

//Show the content for the right page, beware that it is a valid class!
function loadPageContent(pageClass) {
    const page = document.querySelector(pageClass);

    if (!page) {
        loadPageContent('home-page');
    }

    const pages = document.querySelectorAll('page');

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    page.style.display = 'block';
}