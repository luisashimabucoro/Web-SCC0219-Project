'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/accounts');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router; 


// 'use strict';

// const Account = require('../models/accounts');

// const express  = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//     Account.find({}).then(function(accounts) {
//         res.status(200).send(accounts);
//     });
// });

// router.getById('/:id', (req, res, next) => {
//     const id = req.params.id;
//     Account.findOne({"id":id}).then(function(account){
//         if (account) {
//             res.status(200).send(account);
//         }
//         else {
//             res.status(404).send();
//         }
//     });
// });

// router.put ('/:id', (req, res, next) => {
//     const id = req.params.id;

//     Account.findOne({ "id": id }).then((account) => {
        
//         if (account != null) {
//             Account.findByIdAndDelete(account._id).then(() => {
//                 Account(req.body).save();
//                 res.status(201).send(req.body);
//             });
//         }
//         else {
//             Account(req.body).save();
//             res.status(201).send(req.body);
//         }
        
//     });


// });

// router.delete ('/:id', (req, res, next) => {
//     const id = req.params.id;
//     Account.findOneAndDelete({"id":id}).then(function(account){
//         if (account) {
//             res.status(204).send();
//         }
//         else {
//             res.status(404).send();
//         }
//     });
// });

// module.exports = router;