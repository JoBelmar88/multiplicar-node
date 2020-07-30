const fs = require('fs');
const colors = require('colors/safe');
let multiplicacion = '';

let crearArchivo = async(base, limite) => {

    if (!base) throw new Error('No existe número base');

    if (isNaN(base)) throw new Error(`${base} no es un valor numérico`);

    if (isNaN(limite)) throw new Error(`${base} no es un valor numérico`);

    for (let index = 1; index <= limite; index++) {
        multiplicacion += (`${base} * ${index} = ${(base * index)}\n`);
    }

    if (!multiplicacion) throw new Error(`El valor de la variable multiplicación esta vacío`);

    fs.writeFile(`tablas/tabla del ${base}.txt`, multiplicacion, async(err) => {
        if (err) throw new Error(err)
    })
    return (colors.black(`tabla-${base}.txt`));

}

let listarTabla = async(base, limite) => {

    console.log('========================='.green);
    console.log(`====Tabla del ${base}====`.green);
    console.log('========================='.red);

    if (limite <= 0) {
        throw new Error(`Limite:${limite} el limite debe ser mayor a 0`);
        return;
    }
    if (base <= 0) {
        throw new Error(`Base:${base} la base debe ser mayor a 0`);
        return;
    }

    if (isNaN(base)) throw new Error(`La base debe ser un valor numérico`);

    if (isNaN(limite)) throw new Error(`El limite debe ser un valor numérico`);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} x ${index} = ${base*index}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}