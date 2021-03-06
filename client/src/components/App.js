import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import * as actions from '../actions';

 import Header from './Header';
 import Login from './Login';
 import SubmissionList  from './submissions/SubmissionList';
 import SubmissionNew from './submissions/SubmissionNew';
 import Products from './products/ProductList';
 import ProductNew from './products/ProductNew';
 import BranchList from './branches/BranchList';
 import ProductEdit from './products/ProductEdit';
 import ProductDelete from './products/ProductDelete';
 import SubmissionView from './submissions/SubmissionView';
 import SubmissionEdit from './submissions/SubmissionEdit';
 import SubmissionDelete from './submissions/SubmissionDelete';
 import SubmissionThx from './submissions/SubmissionThx';
 import BranchNew from './branches/BranchNew';
 import BranchEdit from './branches/BranchEdit';
 import BranchDelete from './branches/BranchDelete';
 import Dashboard from './Dashboard';



class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div className="container">
                <Header userAuth={this.props.auth}/>
                <Router history={history}>
                    <div>
                    
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/Submissions" component={SubmissionList} />
                        <Route exact path="/SubmissionNew" component={SubmissionNew} />
                        <Route exact path="/Products" component={Products} />
                        <Route exact path="/ProductNew" component={ProductNew} />
                        <Route exact path="/BranchNew" component={BranchNew} />
                        <Route exact path="/BranchEdit/:id" component={BranchEdit} />
                        <Route exact path="/Branches" component={BranchList} />
                        <Route exact path="/BranchDelete/:id" component={BranchDelete} />
                        <Route exact path="/ProductEdit/:id" component={ProductEdit} />
                        <Route exact path="/ProductDelete/:id" component={ProductDelete} />
                        <Route exact path="/SubmissionView/:id" component={SubmissionView} />
                        <Route exact path="/SubmissionEdit/:id" component={SubmissionEdit} />
                        <Route exact path="/SubmissionDelete/:id" component={SubmissionDelete} />
                        <Route exact path="/SubmissionThx" component={SubmissionThx} />
                        <Route exact path="/Dashboard" component={Dashboard} />
                        
                    </div>
                </Router>
            </div>
        );
    };
}

function mapStateToProps({ auth }){
    return { auth };
}


export default connect(mapStateToProps, actions) (App);