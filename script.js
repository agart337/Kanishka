// LANDING PAGE

window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("landing-page").classList.add("fade-out");
    }, 1500);
});


// PHOTOGRAPHY PHOTOGRAPHY PHOTOGRAPHY PHOTOGRAPHY PHOTOGRAPHY

// PROJECT
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


// PROJECT 1

const wrapper1 = document.getElementById('imageWrapper1');
const image1 = document.getElementById('carouselImage1');
const prevArrow1 = document.getElementById('prevArrow1');
const nextArrow1 = document.getElementById('nextArrow1');
const leftCaption1 = document.getElementById('leftCaption1');
const rightCaption1 = document.getElementById('rightCaption1');

const images1 = [
    "../raw1/Kanishka_01.png",
    "../raw1/Kanishka_02.jpg",
    "../raw1/Kanishka_03.jpeg",
    "../raw1/Kanishka_04.jpeg"
];

const captions1 = [
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" }
];

let currentIndex1 = 0;

wrapper1.addEventListener('mousemove', (e) => {
    const rect = image1.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isLeft = x < rect.width / 2;

    const arrow = isLeft ? prevArrow1 : nextArrow1;
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
    arrow.style.opacity = 1;

    (isLeft ? nextArrow1 : prevArrow1).style.opacity = 0;
});

wrapper1.addEventListener('mouseleave', () => {
    prevArrow1.style.opacity = 0;
    nextArrow1.style.opacity = 0;
});

prevArrow1.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide1(-1);
});

nextArrow1.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide1(1);
});

function changeSlide1(direction) {
    currentIndex1 += direction;

    if (currentIndex1 < 0) {
        currentIndex1 = images1.length - 1;
    } else if (currentIndex1 >= images1.length) {
        currentIndex1 = 0;
    }

    image1.src = images1[currentIndex1];
    leftCaption1.textContent = captions1[currentIndex1].left;
    rightCaption1.textContent = captions1[currentIndex1].right;
}


// PROJECT 2

const wrapper2 = document.getElementById('imageWrapper2');
const image2 = document.getElementById('carouselImage2');
const prevArrow2 = document.getElementById('prevArrow2');
const nextArrow2 = document.getElementById('nextArrow2');
const leftCaption2 = document.getElementById('leftCaption2');
const rightCaption2 = document.getElementById('rightCaption2');

const images2 = [
    "../raw2/Kanishka_Kanishka_08.jpg",
    "../raw2/Kanishka_Kanishka_02.jpg",
    "../raw2/Kanishka_Kanishka_03.jpg",
    "../raw2/Kanishka_Kanishka_04.jpg",
    "../raw2/Kanishka_Kanishka_05.jpg",
    "../raw2/Kanishka_Kanishka_06.jpg",
    "../raw2/Kanishka_Kanishka_07.jpg",
    "../raw2/Kanishka_Kanishka_01.jpg"
];

const captions2 = [
    { left: "Caption 1, 2024", right: "Medium 1" },
    { left: "Caption 2, 2024", right: "Medium 2" },
    { left: "Caption 3, 2024", right: "Medium 3" },
    { left: "Caption 4, 2024", right: "Medium 4" },
    { left: "Caption 5, 2024", right: "Medium 5" },
    { left: "Caption 6, 2024", right: "Medium 6" },
    { left: "Caption 7, 2024", right: "Medium 7" },
    { left: "Caption 8, 2024", right: "Medium 8" }
];

let currentIndex2 = 0;

wrapper2.addEventListener('mousemove', (e) => {
    const rect = image2.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isLeft = x < rect.width / 2;

    const arrow = isLeft ? prevArrow2 : nextArrow2;
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
    arrow.style.opacity = 1;

    (isLeft ? nextArrow2 : prevArrow2).style.opacity = 0;
});

wrapper2.addEventListener('mouseleave', () => {
    prevArrow2.style.opacity = 0;
    nextArrow2.style.opacity = 0;
});

prevArrow2.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide2(-1);
});

nextArrow2.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide2(1);
});

function changeSlide2(direction) {
    currentIndex2 += direction;

    if (currentIndex2 < 0) {
        currentIndex2 = images2.length - 1;
    } else if (currentIndex2 >= images2.length) {
        currentIndex2 = 0;
    }

    image2.src = images2[currentIndex2];
    leftCaption2.textContent = captions2[currentIndex2].left;
    rightCaption2.textContent = captions2[currentIndex2].right;
}

// PROJECT 3

const wrapper3 = document.getElementById('imageWrapper3');
const image3 = document.getElementById('carouselImage3');
const prevArrow3 = document.getElementById('prevArrow3');
const nextArrow3 = document.getElementById('nextArrow3');
const leftCaption3 = document.getElementById('leftCaption3');
const rightCaption3 = document.getElementById('rightCaption3');

const images3 = [
    "../raw3/Paris.jpg",
    "../raw3/Paris1.jpg",
    "../raw3/Paris2.jpg",
    "../raw3/Paris3.jpg",
    "../raw3/Paris8.jpg",
    "../raw3/Paris13.jpg",
    "../raw3/Paris18.jpg",
    "../raw3/Paris19.jpg",
    "../raw3/Paris21.jpg",
    "../raw3/Paris26.jpg",
    "../raw3/Paris29.jpg",
    "../raw3/Paris35.jpg"
];

const captions3 = [
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" },
    { left: "Untitled, 2024", right: "Medium" }
];

let currentIndex3 = 0;

wrapper3.addEventListener('mousemove', (e) => {
    const rect = image3.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const isLeft = x < rect.width / 2;

    const arrow = isLeft ? prevArrow3 : nextArrow3;
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
    arrow.style.opacity = 1;

    (isLeft ? nextArrow3 : prevArrow3).style.opacity = 0;
});

wrapper3.addEventListener('mouseleave', () => {
    prevArrow3.style.opacity = 0;
    nextArrow3.style.opacity = 0;
});

prevArrow3.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide3(-1);
});

nextArrow3.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide3(1);
});

function changeSlide3(direction) {
    currentIndex3 += direction;

    if (currentIndex3 < 0) {
        currentIndex3 = images3.length - 1;
    } else if (currentIndex3 >= images3.length) {
        currentIndex3 = 0;
    }

    image3.src = images3[currentIndex3];
    leftCaption3.textContent = captions3[currentIndex3].left;
    rightCaption3.textContent = captions3[currentIndex3].right;
}