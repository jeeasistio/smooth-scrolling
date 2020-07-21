const smoothScroll = (target, duration) => {
  target = document.querySelector(target);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = startTime - currentTime;
    const run = Math.easeInQuad(timeElapsed, startPosition, distance, duration);
    window.scroll(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  Math.easeInQuad = function (t, b, c, d) {
    t /= d;
    return c * t * t + b;
  };

  requestAnimationFrame(animation);
};

const box1 = document.querySelector(".btn");

box1.addEventListener("click", () => {
  smoothScroll(".box2", 1000);
});