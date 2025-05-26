// LANDING PAGE

window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("landing-page").classList.add("fade-out");
    }, 2500);
});

// PHOTO CAROUSEL

const wrapper = document.getElementById('imageWrapper');
const image = document.getElementById('carouselImage');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

// Image list
const images = [
    "../raw/Kanishka_Kanishka_Surrender.jpg",
    "../raw/Kanishka_Kanishka_Takeover.jpg",
    "../raw/Kanishka_Kanishka_Birth_Photoetching.jpg",
    "../raw/Kanishka_Kanishka_Labor Veins.jpg",
    "../raw/Kanishka_Kanishka_Mars_Photoetching.jpg",
    "../raw/Kanishka_Kanishka_Slime Mold with Nani.jpg",
    "../raw/Kanishka_Kanishka_Braiding with Algae_Photogram.jpg",
    "../raw/Kanishka_Kanishka_Interconnected_Photogram with Algae.jpg"
];

let currentIndex = 0;

// Move arrows based on cursor
wrapper.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isLeft = x < rect.width / 2;

    const arrow = isLeft ? prevArrow : nextArrow;
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
    arrow.style.opacity = 1;

    (isLeft ? nextArrow : prevArrow).style.opacity = 0;
});

wrapper.addEventListener('mouseleave', () => {
    prevArrow.style.opacity = 0;
    nextArrow.style.opacity = 0;
});

prevArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide(-1);
});

nextArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide(1);
});

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    image.src = images[currentIndex];
}

// CAPTIONS

// Captions for each image
const captions = [
    { left: "Untitled, Slime mold on photograph, 2025", right: "Archival print on photo rag" },
    { left: "Untitled, Slime mold on photograph, 2025", right: "Archival print on photo rag" },
    { left: "Birth, 2024", right: "Photogravure" },
    { left: "Eversion, Slime mold on photograph, 2025", right: "Archival print on photo rag" },
    { left: "Uprising on Mars, 2024", right: "Hand painted Photogravure" },
    { left: "Stardust, Slime mold on photograph, 2025", right: "Archival print on photo rag" },
    { left: "Algae Braid, 2025", right: "Photogram, Algae on silver gelatin paper" },
    { left: "Untitled, 2025", right: "Collage, Photo rag on silver gelatin print" }
];

// Reference to caption elements
const leftCaption = document.querySelector('.left-caption');
const rightCaption = document.querySelector('.right-caption');

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Update image source
    image.src = images[currentIndex];

    // Update captions
    leftCaption.textContent = captions[currentIndex].left;
    rightCaption.textContent = captions[currentIndex].right;
}
