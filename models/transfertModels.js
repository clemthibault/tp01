const mongoose = require("mongoose");

const TransfertModels = mongoose.model(
    "node-api", 
    {
        siretEtablissementPredecesseur: {
            type: Number,
            required : true
        },
        siretEtablissementSuccesseur: {
            type: Number,
            required : true
        },
        dateLienSuccession: {
            type: Date,
            required : true
        },
        transfertSiege: {
            type: Boolean,
            required : true
        },
        continuiteEconomiqu: {
            type: Boolean,
            required : true
        },
        dateDernierTraitementLienSuccession: {
            type: Date,
            required : true
        },

    }, 
    "transfert"
);

module.exports = { TransfertModels };