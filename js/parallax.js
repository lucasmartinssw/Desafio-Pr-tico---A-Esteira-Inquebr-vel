const back = document.querySelector('.layer-back');
const front = document.querySelector('.layer-front');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  back.style.transform = `translateY(${y * 0.2}px)`;
  front.style.transform = `translateY(${y * 0.4}px)`;
});
