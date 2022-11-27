const { result } = require('cypress/types/lodash');
const express = require('express');
const router = express.Router();

const { TransfertModels } = require('../models/transfertModels');

router.get('/', (req, res) => {
    TransfertModels.find((err, docs) => {
       if (!err) res.send(docs);
       else console.log("Error to get data : " + err);
        })
});

router.get('/tp1', (req, res) => {
    const {
        result: {
            type: Number,
        }
    };
    TransfertModels.find((err, docs) => {
        if (transfertSiege==true, result = +1)
    })
    console.log("result*100/20")
});

module.exports = router;