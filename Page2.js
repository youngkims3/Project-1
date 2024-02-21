document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.hover-image');

    function getRandomPosition() {
        const x = Math.random() * (window.innerWidth - image.width);
        const y = Math.random() * (window.innerHeight - image.height);
        return { x, y };
    }

    function moveImageRandomly() {
        const position = getRandomPosition();
        image.style.transform = `translate(${position.x}px, ${position.y}px) scale(1)`;
        image.addEventListener('mouseover', () => {
            image.style.transform = `translate(${position.x}px, ${position.y}px) scale(1.1)`;
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = `translate(${position.x}px, ${position.y}px) scale(1)`;
        });
    }

    setInterval(moveImageRandomly, 800); // Adjust the interval (in milliseconds) as needed
});