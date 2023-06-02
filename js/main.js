document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random(360)) * 100}deg, #FF8552, rgba(228, 225, 219, 1))`;

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const text = card.querySelector('.card-text');

    card.addEventListener('mouseenter', function() {
        text.classList.remove('shrinked-div');
    })

    card.addEventListener('mouseleave', function() {
        text.classList.add('shrinked-div');
    })

    text.classList.add('shrinked-div');
});