const loadScreenText = document.querySelector(`.loading-text`);
const loadingOverlay = document.querySelector(`.load-screen`);

let websiteLoaded = false;
let loadSeconds = 0;


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
        }, 1000);

        if (websiteLoaded == true) {
            websiteLoaded = false;
            loadScreenFade();
        }
    }
}

function loadScreenFade() {
    loadingOverlay.style.opacity = loadingOverlay.style.opacity -= 0.02;

    if (loadingOverlay.style.opacity > 0.03) {
        setTimeout(() => {
            loadScreenFade();
        }, 100);
    } else {
        loadingOverlay.remove();
        websiteLoaded = `yes`;
    }
}

loadingOverlay.style.opacity = 1;

loadScreenAnimation();