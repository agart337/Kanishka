document.addEventListener("DOMContentLoaded", function () {
            const projectSections = [
                document.getElementById("project0"),
                document.getElementById("project1"),
                document.getElementById("project2"),
                document.getElementById("project3")
            ];

            const captions = document.querySelectorAll(".project-caption");

            function highlightVisibleCaption() {
                const scrollPos = window.scrollY + window.innerHeight / 2;

                projectSections.forEach((section, index) => {
                    const offsetTop = section.offsetTop;
                    const offsetBottom = offsetTop + section.offsetHeight;

                    if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                        captions.forEach(c => c.classList.remove("highlighted"));
                        captions[index].classList.add("highlighted");
                        updateCaptions(0);
                        updateCaptions1(0);
                        updateCaptions2(0);
                        updateCaptions3(0);
                        
                    }
                });
            }
            window.addEventListener("scroll", highlightVisibleCaption);
            highlightVisibleCaption();
        });



// PROJECT 0

const wrapper = document.getElementById('imageWrapper');
const image = document.getElementById('carouselImage');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const rightCaption = document.getElementById('rightCaption');

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

const captions = [
    ["Untitled, Slime mold on photo rag", "Archival print on photo rag", "2025"],
    ["Untitled, Slime mold on photograph", "Archival print on photo rag", "2025"],
    ["Birth", "Photogravure", "2024"],
    ["Eversion, Slime mold on photograph", "Archival print on photo rag", "2025"],
    ["Uprising on Mars", "Hand painted Photogravure", "2024"],
    ["Stardust, Slime mold on photograph", "Archival print on photo rag", "2025"],
    ["Algae Braid", "Photogram, Algae on silver gelatin paper", "2025"],
    ["Untitled", "Collage, Photo rag on silver gelatin print", "2025"]
];

let currentIndex = 0;

function updateCaptions(index) {
    const lines = captions[index];
    rightCaption.innerHTML = ""; // Clear existing content

    lines.forEach((line, i) => {
        const div = document.createElement('div');
        rightCaption.appendChild(div);
        typeWriter(line, div, i * 1000); // Delay next line
    });
}

function typeWriter(text, element, delay) {
    let i = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // typing speed
    }, delay);
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    image.src = images[currentIndex];
    updateCaptions(currentIndex);
}

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



// PROJECT 1

const wrapper1 = document.getElementById('imageWrapper1');
const image1 = document.getElementById('carouselImage1');
const prevArrow1 = document.getElementById('prevArrow1');
const nextArrow1 = document.getElementById('nextArrow1');
const rightCaption1 = document.getElementById('rightCaption1');

const images1 = [
    "../raw1/Kanishka_01.jpg",
    "../raw1/Kanishka_02.jpg",
    "../raw1/Kanishka_03.jpg",
    "../raw1/Kanishka_04.jpeg",
    "../raw1/Kanishka_05.jpeg",
    "../raw1/Kanishka_06.jpg",
    "../raw1/Kanishka_07.jpg",
    "../raw1/Kanishka_08.jpg"
];

const captions1 = [
    ["Point of Origin", "Archival Inkjet Print on Bamboo Paper", "2025"],
    ["Primordial soup", "Archival Inkjet on Bamboo Paper", "2025"],
    ["Untitled", "Archival Inkjet on Glossy Paper", "2024"],
    ["Untitled", "Archival Inkjet on Bamboo Paper", "2025"],
    [" Earthrise", "Archival Inkjet on Glossy Paper", "2025"],
    ["Smile, Repeat", "Archival Inkjet on Bamboo Paper", "2025"],
    ["Private Reckoning", "Archival Inkjet on Glossy Paper", "2024"],
    ["Untitled", "Archival Inkjet on Glossy Paper", "2024"]
];

let currentIndex1 = 0;

function updateCaptions1(index1) {
    rightCaption1.innerHTML = ""; // Clear existing captions

    const lines = captions1[index1];
    let totalDelay = 0;

    lines.forEach((line, i) => {
        const div = document.createElement('div');
        rightCaption1.appendChild(div);
        typeWriter1(line, div, totalDelay);
        totalDelay += line.length * 30 + 300; // Adjust delay for next line (30ms per char + pause)
    });
}


function typeWriter1(text1, element1, delay1) {
    let i = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (i < text1.length) {
                element1.textContent += text1.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // typing speed per character
    }, delay1);
}

function changeSlide1(direction) {
    currentIndex1 += direction;

    if (currentIndex1 < 0) {
        currentIndex1 = images1.length - 1;
    } else if (currentIndex1 >= images1.length) {
        currentIndex1 = 0;
    }

    image1.src = images1[currentIndex1];
    updateCaptions1(currentIndex1);
}

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


// PROJECT 2

const wrapper2 = document.getElementById('imageWrapper2');
const image2 = document.getElementById('carouselImage2');
const prevArrow2 = document.getElementById('prevArrow2');
const nextArrow2 = document.getElementById('nextArrow2');
const rightCaption2 = document.getElementById('rightCaption2');

const images2 = [
    "../raw2/Kanishka_Kanishka_04.jpg",
    "../raw2/Kanishka_Kanishka_09.jpg",
    "../raw2/Kanishka_Kanishka_02.jpg",
    "../raw2/Kanishka_Kanishka_03.jpg",
    "../raw2/Kanishka_Kanishka_08.jpg",
    "../raw2/Kanishka_Kanishka_05.jpg",
    "../raw2/Kanishka_Kanishka_06.jpg",
    "../raw2/Kanishka_Kanishka_07.jpg",
    "../raw2/Kanishka_Kanishka_01.jpg"
];

const captions2 = [
    ["Point of Origin - II", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Human Codes", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["When did it arrive here", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Untitled", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Performing Futility", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Untitled", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Untitled", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Untitled", "Archival Inkjet Print on Bamboo Paper", "2024"],
    ["Untitled", "Archival Inkjet Print on Bamboo Paper", "2024"],

];

let currentIndex2 = 0;

// // PROJECT 2
function updateCaptions2(index2) {
    rightCaption2.innerHTML = ""; // Clear existing captions

    const lines = captions2[index2];
    let totalDelay = 0;

    lines.forEach((line, i) => {
        const div = document.createElement('div');
        rightCaption2.appendChild(div);
        typeWriter2(line, div, totalDelay);
        totalDelay += line.length * 30 + 300; // Adjust delay for next line (30ms per char + pause)
    });
}

function typeWriter2(text2, element2, delay2) {
    let i = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (i < text2.length) {
                element2.textContent += text2.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // typing speed per character
    }, delay2);
}


function changeSlide2(direction) {
    currentIndex2 += direction;

    if (currentIndex2 < 0) {
        currentIndex2 = images2.length - 1;
    } else if (currentIndex2 >= images2.length) {
        currentIndex2 = 0;
    }

    image2.src = images2[currentIndex2];
    updateCaptions2(currentIndex2);
}

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

// PROJECT 3

const wrapper3 = document.getElementById('imageWrapper3');
const image3 = document.getElementById('carouselImage3');
const prevArrow3 = document.getElementById('prevArrow3');
const nextArrow3 = document.getElementById('nextArrow3');

const images3 = [
    "../raw3/Paris.jpeg",
    "../raw3/Paris1.jpg",
    "../raw3/Paris2.jpg",
    "../raw3/Paris3.jpg",
    "../raw3/Paris8.jpg",
    "../raw3/Paris13.jpeg",
    "../raw3/Paris18.jpeg",
    "../raw3/Paris19.jpeg",
    "../raw3/Paris21.jpeg",
    "../raw3/Paris26.jpeg",
    "../raw3/Paris29.jpeg",
    "../raw3/Paris35.jpg"
];

let currentIndex3 = 0;

// // PROJECT 3
function updateCaptions3(index3) {
    rightCaption3.innerHTML = ""; // Clear existing captions

    const lines = captions3[index3];
    let totalDelay = 0;

    lines.forEach((line, i) => {
        const div = document.createElement('div');
        rightCaption3.appendChild(div);
        typeWriter3(line, div, totalDelay);
        totalDelay += line.length * 30 + 300; // Adjust delay for next line (30ms per char + pause)
    });
}


function typeWriter3(text3, element3, delay3) {
    let i = 0;
    setTimeout(() => {
        const interval = setInterval(() => {
            if (i < text3.length) {
                element3.textContent += text3.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // typing speed per character
    }, delay3);
}


function changeSlide3(direction) {
    currentIndex3 += direction;

    if (currentIndex3 < 0) {
        currentIndex3 = images3.length - 1;
    } else if (currentIndex3 >= images3.length) {
        currentIndex3 = 0;
    }

    image3.src = images3[currentIndex3];
    updateCaptions3(currentIndex3);
}

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