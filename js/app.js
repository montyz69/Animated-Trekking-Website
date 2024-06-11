const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("mousemove", (e) => {
    const xValue = (e.clientX - window.innerWidth / 2) ; // Adjust the multiplier to control the effect strength
    const yValue = (e.clientY - window.innerHeight / 2) ; // Adjust the multiplier to control the effect strength

    parallaxElements.forEach((el) => {
        el.style.transform = `translate(calc(-50% + ${-xValue}px), calc(-50% + ${-yValue}px))`;
    });
});
