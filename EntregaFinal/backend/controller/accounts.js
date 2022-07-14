'use strict';

const Account = require('../models/accounts');


exports.get = (req, res, next) => {
    console.log("fez get");
    console.log(req.body);

    Account.find({}).then(function(accounts) {
        res.status(200).send(accounts);
    });
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    console.log(Account);
    Account.findOne({"id":id}).then(function(account){
        if (account) {
            res.status(200).send(account);
        }
        else {
            res.status(404).send();
        }
    });
};

exports.put = (req, res, next) => {
    console.log("fez put")
    const id = req.params.id;

    Account.findOne({ "id": id }).then((account) => {
        console.log("entrou no findone");
        if (account != null) {
            console.log("entrou no != null");
            Account.findByIdAndDelete(account._id).then(() => {
                Account(req.body).save();
                res.status(201).send(req.body);
            });
        }
        else {
            console.log("salvou");
            Account(req.body).save();
            res.status(201).send(req.body);
        }
        
    });


};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Account.findOneAndDelete({"id":id}).then(function(account){
        if (account) {
            res.status(204).send();
        }
        else {
            res.status(404).send();
        }
    });
};