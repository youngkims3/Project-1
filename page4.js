document.addEventListener('DOMContentLoaded', function() {
    const clickImage = document.querySelector('.click-image');

    clickImage.addEventListener('click', function() {
        const numImages = 5; // Number of images to create
        const imageSize = 100; // Size of the image
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = document.body.clientHeight;

        for (let i = 0; i < numImages; i++) {
            const image = document.createElement('img');
            image.src = clickImage.src;
            image.classList.add('click-image');
            image.style.width = imageSize + 'px';
            image.style.height = 'auto';
            image.style.position = 'absolute';
            image.style.left = Math.random() * (bodyWidth - imageSize) + 'px';
            image.style.top = Math.random() * (bodyHeight - imageSize) + 'px';
            document.body.appendChild(image);
        }
    });
});
