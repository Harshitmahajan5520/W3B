const coord = {
    x: 0,
    y: 0
};
const circles = document.querySelectorAll('.circle');

// Initialize circle positions
circles.forEach((circle) => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', (e) => {
    coord.x = e.clientX;
    coord.y = e.clientY;
    animateCircle();
});

function animateCircle() {
    let x = coord.x;
    let y = coord.y;

    // Animate each circle with a slight offset and easing
    circles.forEach((circle, index) => {
        // Move the circle towards the current mouse coordinates
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";   

        // Apply scale using CSS transform (scale function)
        const scaleValue = 1 - index * 0.1; // Scale decreases for each subsequent circle
        circle.style.transform = `scale(${scaleValue})`;

        // Calculate the next circle or wrap around to the first circle
        const nextCircle = circles[index + 1] || circles[0];

        // Apply smoothing by calculating the distance between current and next
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;

        // Update the current circle's stored coordinates
        circle.x = x;
        circle.y = y;
    });
}
