const parallaxElements = document.querySelectorAll(".parallax");
const main = document.querySelector ("main");

function update(cursorX, cursorY, rotateDegree) {
  parallaxElements.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotatespeed = el.dataset.rotation;

    let elLeft = parseFloat(getComputedStyle(el).left);
    let isInLeft = elLeft < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorX - elLeft) * isInLeft * 0.1;

    el.style.transform = `translateX(calc(-50% + ${-cursorX * speedx}px)) 
    translateY(calc(-50% + ${-cursorY * speedy}px)) 
    perspective(3000px) translateZ(${zValue * speedz}px) 
    rotateY(${rotateDegree * rotatespeed}deg)`;
  });
}

update(0, 0, 0);

window.addEventListener("mousemove", (e) => {
  if (timeline.isActive()) return;
  const xValue = e.clientX - window.innerWidth / 2; // Adjust the multiplier to control the effect strength
  const yValue = e.clientY - window.innerHeight / 2; // Adjust the multiplier to control the effect strength

  const rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
  update(xValue, yValue, rotateDegree);
});

if (window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * 0.6}px`;
}else{
    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

let timeline = gsap.timeline();

parallaxElements.forEach((el) => {
  timeline.from(
    el,
    {
      top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
      duration: 2,
      ease: "power3.out",
    },
    "1"
  );
});

timeline.from(
  ".text h1",
  {
    y:
      window.innerHeight -
      document.querySelector(".text h1").getBoundingClientRect().top,
    duration: 2,
  },
  "2.5"
);

timeline.from(
  ".text h2",
  {
    y: -150,
    opacity: 0,
    duration: 1.5,
  },
  "3"
);

timeline.from(
  ".hide",
  {
    opacity: 0,
    duration: 1.5,
  },
  "3"
);
