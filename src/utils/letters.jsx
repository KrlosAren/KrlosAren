
const letters = () => {
  const hola = document.querySelectorAll('.content__text span');
  hola[1].classList.toggle('hinge');
  hola[2].classList.toggle('hinge');
  hola[3].classList.toggle('hinge');
  hola[4].classList.toggle('hinge');
  hola[5].classList.toggle('hinge');
};

export default letters;
