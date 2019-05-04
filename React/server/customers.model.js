const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customers = new Schema ({


    firstn: {

        type: String
    },
    lastn: {

        type: String  

          },
    email: {

        type: String

    }


});

module.exports = mongoose.model('Customers', Customers); 