import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Employee extends Component
{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Employee Data
                                    <Link to={'add-employee'} className="btn btn-primary btn-sm float-end">Add Employee</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}
export default Employee;