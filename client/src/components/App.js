import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // we have to import the helpers of react-router-dom
// BrowserRouter : the logic of react router, looks at the current URL and changes a set of components that are visible on the screen at any given time
// Route: react component used as a rule, a rule of a route that the user is visiting and the components that become visible.
import { connect } from 'react-redux';
import * as actions from '../actions';


// const Header = () => <h2>Header</h2>
import Header from './Header';
//const Landing = () => <h2>Landing</h2>
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

//BrowserRouter expects to have at least 1 (one) child component, it throws an error if more are given

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
        return (
            <div className = "container">
                <BrowserRouter> 
                    <div>
                        <Header></Header>
                        <Route exact = {true} path = "/" component = {Landing}></Route>
                        <Route exact = {true} path = "/surveys" component = {Dashboard} ></Route>
                        <Route path = "/surveys/new" component = {SurveyNew} ></Route>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions) (App);