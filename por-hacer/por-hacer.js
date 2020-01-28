const fs = require('fs');

let listadoPorHacer = [];

// Persiste a un documento en json
const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
};

// Crea una
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    guardaDB();

    return porHacer;
};

/*carga el documento json*/
const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data');

    } catch (e) {
        listadoPorHacer = [];
    }

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const borrar = (descripcion) => {
    console.log(descripcion);
    cargarDB();

    let listAux = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === listAux.length) {
        return false;
    } else {
        listadoPorHacer = listAux;
        guardaDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
