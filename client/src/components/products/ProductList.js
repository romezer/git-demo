import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import { fetchProducts } from '../../actions';
import history from '../../history';
import uniqid from 'uniqid';


class ProductsList extends React.Component{
    componentDidMount(){
        this.props.fetchProducts();
    }

    renderList(){
        return this.props.products.map(product =>{
            return(
                <Router key={uniqid()} history={history}>
                    <li key={uniqid()} className="collection-item avatar">
                        <i key={uniqid()} className="material-icons circle red">turned_in</i>
                        <span key={uniqid()}  className="title">{product.serialNumber}</span>
                    <p key={uniqid()}>{product.description}</p>
                    <Link key={uniqid()} to={`/ProductEdit/${product._id}`} className="waves-effect waves-light btn-small right blue" style={{ marginTop: '-30px' }}>
                        <i key={uniqid()} className="material-icons">edit</i>
                    </Link>
                </li>
                
                </Router>
                

            )
        });
    };

    render(){
        return(
            <div>
                <h3>Products List</h3>
                <ul className="collection">
                    {this.renderList()}
                </ul>
                <Router history={history}>
                    <div className="fixed-action-btn">
                        <Link to="/ProductNew" className="btn-floating btn-large red">
                            <i className="material-icons">add</i>
                        </Link>
                    </div>
                </Router>
            </div>
        );
        
    }
}

function mapStateToProps(state){
    return { products: Object.values(state.products) };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsList);