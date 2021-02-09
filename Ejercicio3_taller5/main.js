let rad = parseInt(prompt(`Ingrese el radio del cilindro: `));
let alt = parseInt(prompt(`Ingrese la altura del cilindro: `));

let pie = Math.PI;
let area = (((2 * pie) * rad) * (rad + alt));
let volum = ((pie * (rad**2)) * alt);

alert(`El cilindro tiene un area de ${area} y un volumen de ${volum}cm3`);