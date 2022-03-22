function sueldo(dT,hT){
    var costo=0.13*25;
    var sueldo=dT*hT*costo;
    return sueldo;
}

document.write('El sueldo es: ');
document.write('<br>');
document.write(sueldo(21,8));