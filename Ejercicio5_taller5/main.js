let user = [];
let valor_h = 30000;
let total = 0;

do{
let sueldo = 0;
let cliente = prompt('Ingrese su nombre: ');
let numero_h = parseInt(prompt('Numero de horas trabajadas: '));
if(numero_h > 0){
    sueldo = numero_h * valor_h;
    total += sueldo;
    user.push({nombre: cliente, horas_trabajadas: numero_h, cantidad:total});
}else{
    user.push({nombre: cliente, valor: 0})
}

}while(parseInt(prompt('Desea ingresar un nuevo usuario? \n 0. No \n 1. Si')));
console.log('Pagos a realizar ', user, `Total pago ${total}`)