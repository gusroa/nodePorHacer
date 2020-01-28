const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear Elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado a completado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca el estado de la tarea'
        }
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
