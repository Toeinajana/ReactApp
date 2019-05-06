import React, {Component} from 'react';
import axios from 'axios';

export default class Update extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstn = this.onChangeFirstn.bind(this);
        this.onChangeLastn = this.onChangeLastn.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstn:'',
            lastn:'',
            email:''
        }
    }


    componentDidMount(){
        axios.get('http://localhost:8000/customers/'+this.props.match.params.id)
             .then(response => {
                 this.setState({
                     firstn: response.data.firstn,
                     lastn: response.data.lastn,
                     email: response.data.email
                 })
             })
             .catch(function(error){
                 console.log(error)
             })
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

        const object = {

            firstn: this.state.firstn,
            lastn: this.state.lastn,
            email: this.state.email



        };
        axios.post('http://localhost:8000/customers/update/'+this.props.match.params.id,object)
             .then(res => console.log(res.data));

             this.props.history.push('/');
    }

    render(){

        return(

            <div>

                <h3>▶ Update details</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                    <label>First name: </label>
                    <input type="text"
                           className="form-control"
                           value={this.state.firstn}
                           onChange={this.onChangeFirstn}
                           />
                    </div>

                    <div className="form-group">
                    <label>Last name: </label>
                    <input type="text"
                           className="form-control"
                           value={this.state.lastn}
                           onChange={this.onChangeLastn}
                           />
                    </div>

                    <div className="form-group">
                    <label>Email: </label>
                    <input type="text"
                           className="form-control"
                           value={this.state.email}
                           onChange={this.onChangeEmail}
                           />
                    </div>

                    <div className="form-group">
                 
                       <center><input type="submit" value="Update" className="btn btn-primary"/></center>

               
                    </div>

                </form>

            </div>


        )
    }



}