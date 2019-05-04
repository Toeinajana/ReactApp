import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import {Button} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import MainPage from "./components/mainpage.component";
import Create from "./components/create.component";
import Update from "./components/update.component";

class App extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {

    return (

      <BrowserRouter>

      <div className="Container">

      <center><h2>Database system</h2></center>

      <div>

      <Navbar color="faded" light>
          <NavbarBrand className="mr-auto">Main page</NavbarBrand>
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

        <Route path="/" exact component={MainPage}/>
        <Route path="/update/:id" component={Update}/>
        <Route path="/create" component={Create}/>

      </div>
      
      
      </BrowserRouter>


    );

  }
}

export default App;
