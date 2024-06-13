document.body.style.backgroundImage = `linear-gradient(${Math.round(Math.random(360)) * 100}deg, #FF8552, rgba(228, 225, 219, 1))`;

const projectCards = document.querySelectorAll('.project-card');

const collapsableDivs = document.querySelectorAll('.collapsable');//.faq-question

let cancelDivShrink = false;

// function shrinkDiv(div) {
//     if (cancelDivShrink == false) {
//         div.style.maxHeight = 'max-content';
//     } else {
//         cancelDivShrink = false;
//     }
// }

// function growDiv(div) {
//     div.style.maxHeight = div.closest('.row').querySelector('img').offsetHeight;
// }

// projectCards.forEach(card => {
//     const text = card.querySelector('.card-text');

//     card.addEventListener('mouseenter', function() {
//         growDiv(text);
//     });

//     card.addEventListener('mouseleave', function() {
//         shrinkDiv(text);
//     });

//     card.addEventListener('click', function() {
//         cancelDivShrink = true;
//     });

//     text.classList.add('shrinked-div');
// });

function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    // Check if the birthday has occurred this year
    const birthMonth = birthDate.getMonth();
    const currentMonth = currentDate.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const birthDate = new Date("2006-06-27");
const age = calculateAge(birthDate);

document.querySelector('.age').innerHTML = age.toString();

function toggleDivVisibility(div) {
    div.classList.toggle('d-none');
}

//Adds click toggle to every div.
collapsableDivs.forEach(collapsableDiv => {
    const toggleArea = collapsableDiv.querySelector('.collapsable-toggle');//question-toggle
    const content = collapsableDiv.querySelector('.collapsable-content');

    content.classList.toggle('d-none');

    toggleArea.addEventListener(`click`, function() {
        const arrow = toggleArea.querySelector('i');
        console.log(arrow);
        toggleDivVisibility(content);
        arrow.classList.toggle('toggled');
    });
});