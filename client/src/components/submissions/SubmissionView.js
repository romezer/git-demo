import React from 'react';
import { connect } from 'react-redux';
import { fetchSubmission } from '../../actions';
import { Router, Link } from 'react-router-dom';
import history from '../../history';
import moment from 'moment';
import _ from 'lodash';

class SubmissionView extends React.Component{
    componentDidMount(){
        this.props.fetchSubmission(this.props.match.params.id);
    }

  

    renderTableRows(){
        if(this.props.submission){
          return  _.map(this.props.submission, function(value, key){
                if(_.startsWith(key, 'p_')){
                    return(
                        <tr key={key}>
                            <td key={key + 1}>{_.trimStart(key, 'p_')}</td>
                            <td key={key + 2}>{value}</td>
                        </tr>
                    )
                }
            })
        }
    }

    renderDetailRows(){
        if(this.props.submission){
          return  _.map(_.pick(this.props.submission, ['date', 'authProp']), function(value, key){
              if(key === 'date'){
                return(
                    <tr key={key}>
                        <td key={key + 1}>Date of submission</td>
                        <td key={key + 2}>
                            {moment(value).format('DD-MM-YYYY')}
                        </td>
                    </tr>
                )
              }else{
                return(
             
                    <tr key={key + 3}>
                        <td key={key + 4}> Submitted By</td>
                        <td key={key + 5}>{value}</td>
                    </tr>
            )

              }

          })
        }
    }

    render(){
        return(
            <div>
                <h3 style={{fontStyle: 'italic'}}>Submission View</h3>
                <table>
                    <thead>
                        <tr>
                        <th>product</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>

                <h5>Details</h5>

                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>

                    <tbody>
                        {this.renderDetailRows()}
                    </tbody>
                </table>
                <br></br>

                <Router history={history}>
                        <Link to='/Submissions' className="red btn-flat white-text">
                            Back
                        </Link>
                    </Router>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
return { submission: state.submissions[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchSubmission })(SubmissionView);