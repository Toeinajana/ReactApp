const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const customersRoutes = express.Router();
const PORT = 8000;

let Customers = require('./customers.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/customers', {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open', function(){
    console.log("Mongo connection is successful")
})

customersRoutes.route('/').get(function(req, res){

    Customers.find(function(err, customers){

        if(err){
            console.log(err);
        }
        else{
            res.json(customers);
        }
    });
});

customersRoutes.route('/:id').get(function(req, res){
    let id = req.params.id;
    Customers.findById(id, function(err, customers){

        res.json(customers);
    });
});

customersRoutes.route('/delete/:id').get(function(req, res){

    let id = req.params.id;
 

    Customers.findByIdAndDelete(id, function(err, customers){

        
        if(!customers)
           res.status(404).send('cannot delete');

        else{


            res.json(customers);

        }
   
    });


});


customersRoutes.route('/create').post(function(req, res){

    let customers = new Customers(req.body);
    customers.save()
        .then(customers => {

            res.status(200).json({'customers': 'customer added successfully'});
        
        })
        .catch(err=>{

            res.status(400).send('adding failed');
        });
});

customersRoutes.route('/update/:id').post(function(req, res){

    Customers.findById(req.params.id, function(err, customers){

        if(!customers)
           res.status(404).send('data not found');

        else
           customers.firstn = req.body.firstn;
           customers.lastn = req.body.lastn;
           customers.email = req.body.email;

           customers.save().then(customers =>{
               res.json('Customers details updated');
           })
           .catch(err=>{
               res.status(400).send("Cannot update");
           });
           
    });
});

app.use('/customers', customersRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


