
const letterAnimation = () => {
  const hola = document.querySelectorAll('.content__text span');
  hola[0].classList.toggle('hinge');
  hola[0].classList.add('rotate');
  hola[1].classList.toggle('hinge');
  hola[2].classList.toggle('hinge');
  hola[3].classList.toggle('hinge');
  hola[4].classList.toggle('hinge');
};

export default letterAnimation;
