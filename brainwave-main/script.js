document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderHandle = document.querySelector('.slider-handle');
    const imageRight = document.querySelector('.image-right');

    let isDragging = false;

    sliderHandle.addEventListener('mousedown', () => {
        isDragging = true;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            let offsetX = event.clientX - sliderContainer.offsetLeft;
            let percentage = (offsetX / sliderContainer.offsetWidth) * 100;

            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;

            sliderHandle.style.left = `${percentage}%`;
            imageRight.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        }
    });
});


