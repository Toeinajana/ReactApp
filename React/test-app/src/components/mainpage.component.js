import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Customers = props => (

    <tr>
        <td>{props.customers.firstn}</td>
        <td>{props.customers.lastn}</td>
        <td>{props.customers.email}</td>
        <td>
            <Link to={"/update/"+props.customers._id}>Update</Link>
        </td>

        <td>
            <Link to={"/delete/"+props.customers._id}><FontAwesomeIcon icon={faTrashAlt} /></Link>
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

              <h3>customers details</h3>
              <table className="table table-striped" style={{marginTop: 20}}>
              <thead>
                  <tr>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      
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