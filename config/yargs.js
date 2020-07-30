const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'l',
        default: 4
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un bloc de notas con las tablas de multiplicar', opt)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}