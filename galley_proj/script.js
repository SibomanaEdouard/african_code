// this is the java to implement functionality
document.addEventListener('DOMContentLoaded', () => {
    // to define required variables
    const thumbnails = document.querySelectorAll('.thumbnail');
    const fullsizeContainer = document.querySelector('.fullsize-container');
    const fullsizeImage = document.querySelector('.fullsize-image img');
    const closeBtn = document.querySelector('.close-btn');

    // listener for handling clicks
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imageSrc = thumbnail.getAttribute('data-image');
            fullsizeImage.src = imageSrc;
            fullsizeContainer.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        fullsizeContainer.style.display = 'none';
    });

    fullsizeContainer.addEventListener('click', (e) => {
        if (e.target === fullsizeContainer) {
            fullsizeContainer.style.display = 'none';
        }
    });
});