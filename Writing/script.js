// stickers hover

// const links = document.querySelectorAll('[data-sticker]');
// const preview = document.getElementById('stickerPreview');

// links.forEach(link => {
//     link.addEventListener('mouseenter', (e) => {
//         const stickerSrc = link.getAttribute('data-sticker');
//         preview.src = stickerSrc;
//         preview.style.display = 'block';
//         preview.style.opacity = '1';
//         preview.style.transform = 'translate(-50%, -50%) scale(1)';
//     });

//     link.addEventListener('mousemove', (e) => {
//         preview.style.left = `${e.clientX}px`;
//         preview.style.top = `${e.clientY}px`;
//     });

//     link.addEventListener('mouseleave', () => {
//         preview.style.opacity = '0';
//         preview.style.transform = 'translate(-50%, -50%) scale(0.8)';
//         setTimeout(() => {
//             preview.style.display = 'none';
//             preview.src = '';
//         }, 300); // Wait for animation to end before hiding
//     });
// });

const links = document.querySelectorAll('[data-sticker]');
const preview = document.getElementById('stickerPreview');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const stickerSrc = link.getAttribute('data-sticker');
        preview.src = stickerSrc;
        preview.classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
        preview.classList.remove('active');
    });
});

preview.addEventListener('transitionend', () => {
    if (!preview.classList.contains('active')) {
        preview.src = '';
    }
});