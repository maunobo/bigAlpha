import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
    renderContent() {
        switch (this.props.auth) { // tells us if the user is logged in the application
            case null:
                return // waiting for the request to be resolved
            case false:
                return (
                    <li><a href = "/auth/google">Login With Google</a></li>
                );
            default: // he must be logged in
                return <li><a href = "/api/logout">Logout</a></li>;
        }
    }

    render() {
        // console.log(this.props); // testing in browsers console, if logged in or not
        return (
           <nav>
               <div className = "nav-wrapper">
                    <Link 
                    to = {this.props.auth ? '/surveys' : '/' } // if the user is signed in then we return the string /surveys , if the user is not signed in returh / 
                    className="left brand-logo">
                        bigWall
                    </Link>
                    <ul className = "right">
                        {this.renderContent()}
                    </ul>
               </div>
           </nav>
        );
    }
}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps) (Header);