'use strict';

const Compra = require('../models/compras');


exports.get = (req, res, next) => {
    console.log("fez get");
    console.log(req.body);

    Compra.find({}).then(function(accounts) {
        res.status(200).send(accounts);
    });
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    console.log(Compra);
    Compra.find({"id":id}).then(function(compra){
        if (compra) {
            res.status(200).send(compra);
        }
        else {
            res.status(404).send();
        }
    });
};

exports.put = (req, res, next) => {
    console.log("fez put")
    const id = req.params.num_compra;

    Compra.findOne({ "num_compra": id }).then((compra) => {
        console.log("entrou no findone");
        if (compra != null) {
            console.log("entrou no != null");
            Compra.findByIdAndDelete(compra._id).then(() => {
                Compra(req.body).save();
                res.status(201).send(req.body);
            });
        }
        else {
            console.log("salvou");
            Compra(req.body).save();
            res.status(201).send(req.body);
        }
        
    });


};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Compra.findOneAndDelete({"id":id}).then(function(compra){
        if (compra) {
            res.status(204).send();
        }
        else {
            res.status(404).send();
        }
    });
};