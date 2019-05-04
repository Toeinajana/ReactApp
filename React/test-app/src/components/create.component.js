import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
      super(props);

      this.onChangeFirstn = this.onChangeFirstn.bind(this);
      this.onChangeLastn = this.onChangeLastn.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          firstn: '',
          lastn: '',
          email: ''

      }
    }

    onChangeFirstn(e){
        this.setState({
            firstn: e.target.value
        });
    }

    onChangeLastn(e){
        this.setState({
            lastn: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log(`form submitted`);
        console.log(`Name: ${this.state.firstn}`);
        console.log(`Last name: ${this.state.lastn}`);
        console.log(`Email: ${this.state.email}`);

        const newCustomers = {

            firstn: this.state.firstn,
            lastn: this.state.lastn,
            email: this.state.email

        }

        //connect with backend
        axios.post('http://localhost:8000/customers/create', newCustomers)

             .then(res => console.log(res.data));

        this.setState({

            firstn: '',
            lastn: '',
            email: ''
        })
    }

    render(){

        return(
        
            <div style={{marginTop: 20}}>
             <h4>Create new customer</h4>
                <form onSubmit={this.onSubmit}>

                <div className="form-group">
                <label style={{marginTop: 30}}>First name: </label>
                <input type="text"
                       className="form-control"
                       value={this.state.firstn}
                       onChange={this.onChangeFirstn}
                       />
               </div>

               <div className="form-group">
                <label style={{marginTop: 10}}>Last name: </label>
                <input type="text"
                       className="form-control"
                       value={this.state.lastn}
                       onChange={this.onChangeLastn}
                       />
               </div>

               <div className="form-group">
                <label style={{marginTop: 10}}>Email: </label>
                <input type="text"
                       className="form-control"
                       value={this.state.email}
                       onChange={this.onChangeEmail}
                       />
               </div>
                
               <div className="form-group">
                 
                 <center><input type="submit" value="Submit" className="btn btn-primary"/></center>

               
               </div>
                
                </form>

            </div>


        )
    }



}