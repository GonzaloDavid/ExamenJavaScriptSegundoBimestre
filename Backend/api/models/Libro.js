/**
 * Libro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {type: 'string', required: true},
    numeroPaginas: {type: 'string', required: true},
    edicion: {type: 'string', required: true},
    fechaPublicacion: {type: 'string', required: true},
    nombreEditorial: {type: 'string', required: true},
    owner: { model: 'Autor'}

  },

};

