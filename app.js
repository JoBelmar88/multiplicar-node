const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(impresion => console.log(impresion))
            .catch(err => {
                console.log(`Error al listar: ${err}`);
            })
        break;
    case 'crear':
        let base = argv.base;
        crearArchivo(base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(error => {
                console.log(`Error al crear el archivo: ${error}`);
            })
        break;
    default:
        console.log('Comando no reconocido');
}

console.log('Base: ', argv.base);
console.log('Límite: ', argv.limite);