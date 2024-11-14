import './style.css';

const arrayCartas = [
  {
    id: 1,
    color: 'red',
  },
  {
    id: 2,
    color: 'orange',
  },
  {
    id: 3,
    color: 'blue',
  },
  {
    id: 4,
    color: 'pink',
  },
  {
    id: 5,
    color: 'black',
  },
  {
    id: 6,
    color: 'red',
  },
  {
    id: 7,
    color: 'orange',
  },
  {
    id: 8,
    color: 'blue',
  },
  {
    id: 9,
    color: 'pink',
  },
  {
    id: 10,
    color: 'black',
  },
];
const seleccionar = (carta, color) => {
  carta.style.backgroundColor = color;
  carta.style.backgorundImage = 'none';
};

const divApp = document.querySelector('#app');

arrayCartas.forEach((carta) => {
  const divCarta = document.createElement('div');
  divCarta.className = 'carta';
  divCarta.addEventListener('click', () => seleccionar(divCarta, carta.color));
  divApp.appendChild(divCarta);
});
