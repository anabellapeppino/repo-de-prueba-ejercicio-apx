"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosas = void 0;
// Creamos el módulo cosas
exports.cosas = {
    // Creamos la colección de objetos
    collection: [
        { id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
        { id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
        { id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
    ],
    // Método para obtener la colección completa
    getAll: function () {
        // Tu código
        return this.collection;
    },
    // Método para obtener un objeto por id
    getById: function (id) {
        // Tu código
        return this.collection.find(function (obj) { return obj.id === id; });
    },
};
