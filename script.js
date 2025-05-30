// LANDING PAGE

window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("landing-page").classList.add("fade-out");
    }, 1500);
});

// PHOTOGRAPHY TYPEWRITER
// // PROJECT 0
function updateCaptions(index) {
    rightCaption.innerHTML = ""; // Clear existing captions

    const lines = captions[index];
    let totalDelay = 0;

    lines.forEach((line, i) => {
        const div = document.createElement('div');
        rightCaption.appendChild(div);
        typeWriter(line, div, totalDelay);
        totalDelay += line.length * 30 + 300; // Adjust delay for next line (30ms per char + pause)
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
        }, 30); // typing speed per character
    }, delay);
}

// // PROJECT 1
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