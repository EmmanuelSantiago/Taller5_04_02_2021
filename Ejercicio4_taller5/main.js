// 4.	"Desarrolle un algoritmo que permita leer dos números y ordenarlos de menor a mayor,si es el caso."

let num_u = parseInt(prompt(`Ingrese un numero entero: `));
let num_d = parseInt(prompt(`Ingrese otro numero entero`));

if (num_u > num_d){
    alert(`El numero ${num_u} es mayor que el numero ${num_d}`);
}else if(num_d > num_u){
    alert(`El numero ${num_d} es mayor que el numero ${num_u} `);
}else {
    alert(`Los numeros ${num_u} y ${num_d} son iguales`);
}