const btnBebidas = document.getElementById('btnBebidas');
const btnCombos =document.getElementById('btnCombos');
const btnArepa = document.getElementById('btnArepa');
const cartaBebidas = document.getElementById('cartaBebidas');
const cartaArepa = document.getElementById('cartaArepa');
const cartaCombos = document.getElementById('cartaCombos');

btnBebidas.addEventListener('click', () => {
  cartaBebidas.style.display = 'block';
  cartaArepa.style.display = 'none';
  cartaCombos.style.display = 'none';
});

btnArepa.addEventListener('click', () => {
  cartaBebidas.style.display = 'none';
  cartaArepa.style.display = 'block';
  cartaCombos.style.display = 'none';
});

btnCombos.addEventListener('click', () => {
    cartaBebidas.style.display = 'none';
    cartaArepa.style.display = 'none';
    cartaCombos.style.display = 'block';
  });