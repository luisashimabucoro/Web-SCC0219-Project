const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Compra = new Schema({

    id:{
        type: Number,
        required: true
    },
    num_compra:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    produto: {
        type: Object,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    endereco:{
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    cep:{
        type: String,
        required: true
    },
    ultimos_digitos:{
        type: String,
    },
    data_compra:{
        type: String,
        required: true
    }},{collection: 'compras'}   
)

const Compras = mongoose.model('Compras', Compra, 'Compras')


module.exports = Compras;
