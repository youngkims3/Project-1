document.addEventListener('DOMContentLoaded', () => {
    const slammingImage = document.querySelector('.slamming-image');

    slammingImage.addEventListener('click', () => {
        slammingImage.classList.add('slamming'); // Apply the scaling and rotation effect
        setTimeout(() => {
            slammingImage.classList.remove('slamming'); // Remove the scaling and rotation effect after a delay
        }, 300); // Adjust the delay as needed
    });
});

