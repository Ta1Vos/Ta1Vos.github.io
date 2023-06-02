document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random(360)) * 100}deg, #FF8552, rgba(228, 225, 219, 1))`;

const projectCards = document.querySelectorAll('.project-card');

let cancelDivShrink = false;

function shrinkDiv(div) {
    if (cancelDivShrink == false) {
        div.classList.add('shrinked-div');
    } else {
        cancelDivShrink = false;
    }
}

function growDiv(div) {
    div.classList.remove('shrinked-div');
}

projectCards.forEach(card => {
    const text = card.querySelector('.card-text');

    text.style.maxheight = `max-content`;

    card.addEventListener('mouseenter', function() {
        growDiv(text);
    });

    card.addEventListener('mouseleave', function() {
        shrinkDiv(text);
    });

    card.addEventListener('click', function() {
        cancelDivShrink = true;
    });

    text.classList.add('shrinked-div');
});