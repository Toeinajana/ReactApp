import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Customers = props => (


    <tr>
        <td>{props.customers.firstn}</td>
        <td>{props.customers.lastn}</td>
        <td>{props.customers.email}</td>
        <td>
        <Link to={"/update/"+props.customers._id}><FontAwesomeIcon icon={faEdit} color="#4286f4" /></Link>
        </td>

        <td>
        <Link to={"/delete/"+props.customers._id}><FontAwesomeIcon icon={faTrashAlt} color="#a51810" /></Link>
        
        </td>
    </tr>
)


export default class Mainpage extends Component {

    constructor(props){

        super(props);
        this.state = {customers: []};
        
    }

    componentDidMount() {
        axios.get('http://localhost:8000/customers/')
        .then(response => {
            this.setState({customers: response.data});
        })
        .catch(function(error){

            console.log(error);
        })
    }

    //immediately update
    componentDidUpdate(){

        axios.get('http://localhost:8000/customers/')
        .then(response => {
            this.setState({customers: response.data});
        })
        .catch(function(error){

            console.log(error);
        })
    }

    listOfcustomers(){

        return this.state.customers.map(function(currentCustomer, i){


            return <Customers customers={currentCustomer} key={i} />;


        });
    }

    render(){

        return(

            <div>

              <h3>▶ Customers details</h3>
              <table className="table table-striped" style={{marginTop: 20}}>
              <thead className="thead-dark">
                  <tr>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th></th>
                      <th></th>
                      
                  </tr>
              </thead>
              <tbody>
                  {this.listOfcustomers()}
              </tbody>
              
              </table>

            </div>


        )
    }



}