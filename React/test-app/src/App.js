import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

//import component
import MainPage from "./components/mainpage.component";
import Create from "./components/create.component";
import Update from "./components/update.component";
import Delete from "./components/delete.component";


//for fontawesome
library.add(faStroopwafel)

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  //navbar
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {

    return (

      <BrowserRouter>

      <div className="Container" style={{marginTop: 20}}>

      <center><h2>Database system</h2></center>

      <div>

      <Navbar color="faded" light>
          <NavbarBrand className="mr-auto mb-0 h1">Main page</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink href="/">All customers</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/create">Create new customer</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>

      {/* component */}

        <Route path="/" exact component={MainPage}/>
        <Route path="/update/:id" component={Update}/>
        <Route path="/create" component={Create}/>
        <Route path="/delete" component={Delete}/>
        


      </div>
      
      
      </BrowserRouter>


    );

  }
}

export default App;
