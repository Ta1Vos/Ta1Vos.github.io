const homeBtn = document.querySelector(`.home-btn`);

const body = document.body;

let animationRunning = false;

homeBtn.addEventListener(`click`, pageChange);

function pageChange(pageName) {
    if (animationRunning == false) {
        animationRunning = true;

        body.classList.add(`page-transition-out`);

        setTimeout(() => {
            body.classList.remove(`page-transition-out`);
            body.classList.add(`page-transition-in`);
            setTimeout(() => {
                body.classList.remove(`page-transition-in`);
                animationRunning = false;
            }, 1490);
        }, 1490);
    }
}