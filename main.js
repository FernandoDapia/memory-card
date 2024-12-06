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

let contador = 0;
let carta1;
let carta2;
let puntuacion = 0;

arrayCartas.sort(() => Math.random() - Math.random())

const divApp = document.querySelector('#app');

const puntuacionHTML = document.createElement('H3');

puntuacionHTML.textContent = `Puntuacion: ` + puntuacion;

document.body.insertBefore(puntuacionHTML, divApp);

const resetearValores = () => {
  contador = 0;
  carta1 = undefined;
  carta2 = undefined;
};

const resetearCarta = (cartaGenerica) => {
  cartaGenerica.nodoHTML.style.backgroundColor = '#447450';
  cartaGenerica.nodoHTML.style.backgroundImage =
    'url(https://www.transparenttextures.com/patterns/argyle.png)';
};

const comprobar = () => {
  if (carta1.datosCarta.color === carta2.datosCarta.color) {
    puntuacion++;
    resetearValores();
  } else {
    puntuacion--;
    setTimeout(() => {
      resetearCarta(carta1);
      resetearCarta(carta2);
      resetearValores();
    }, 500);
  }
  puntuacionHTML.textContent = `Puntuacion: ` + puntuacion;
};

const seleccionar = (divCartaNodoHTML, datosDeCadaCarta) => {
  if (contador < 2) {
    contador++;
    console.log('cartas seleccionadas: ' + contador);
    divCartaNodoHTML.style.backgroundColor = datosDeCadaCarta.color;
    divCartaNodoHTML.style.backgorundImage = 'none';
  }
  if (contador === 1) {
    carta1 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta,
    };
    console.log(carta1);
  }
  if (contador === 2) {
    carta2 = {
      nodoHTML: divCartaNodoHTML,
      datosCarta: datosDeCadaCarta,
    };
    console.log(carta2);
    comprobar();
  }
};

arrayCartas.forEach((datosDeCadaCarta) => {
  const divCartaNodoHTML = document.createElement('div');
  divCartaNodoHTML.className = 'carta';
  divCartaNodoHTML.addEventListener('click', () =>
    seleccionar(divCartaNodoHTML, datosDeCadaCarta)
  );
  divApp.appendChild(divCartaNodoHTML);
});
