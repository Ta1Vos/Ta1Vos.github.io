const loadScreenText = document.querySelector(`.loading-text`);
const loadingOverlay = document.querySelector(`.load-screen`);

let websiteLoaded = false;
let loadSeconds = 0;

window.addEventListener("DOMContentLoaded", function() {
    loadScreenFade();
});

function loadScreenAnimation() {
    if (websiteLoaded != `yes`) {
        setTimeout(() => {
            loadSeconds++;

            if (loadSeconds <= 3) {
                loadScreenText.textContent += ` .`;
            } else {
                loadScreenText.textContent = `Loading`;
                loadSeconds = 0;
            }

            loadScreenAnimation();
        }, 500);
    }
}

function loadScreenFade() {
    loadingOverlay.style.opacity = loadingOverlay.style.opacity -= 0.010;

    if (loadingOverlay.style.opacity > 0.03) {
        setTimeout(() => {
            loadScreenFade();
        }, 10);
    } else {
        loadingOverlay.remove();
        websiteLoaded = `yes`;
    }
}

loadingOverlay.style.opacity = 1;

loadScreenAnimation();