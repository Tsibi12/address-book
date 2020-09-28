import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from "react-table"; 
import 'react-table/react-table.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { deleteContact } from '../actions'; 

class ListContact extends Component {

    deleteContact(e,id){
        e.preventDefault();
        const ans = window.confirm('Do you want to delete contact with id: ' + id);
        if (ans) {
            this.props.deleteContact({id});
        }
    }

    render() {
        const { contacts} = this.props;
        const columns = [
            {  
                Header: 'ID',  
                accessor: 'id',
                flexGrow: 1,
                width: 40, 
                
            },
            {  
                Header: 'FirstName',  
                accessor: 'firstName' ,
            },
           {  
                Header: 'LastName',  
                accessor: 'lastName' ,
           },
           {  
                Header: 'Phone',  
                accessor: 'phone',
           },
           {  
                Header: 'Email',  
                accessor: 'email',
                flexGrow: 1,
                width: 200 
            },
            {  
                Header: 'City',  
                accessor: 'city',
            },
            {  
                Header: 'Street',  
                accessor: 'street',
            },
            {  
                Header: 'PostalCode',  
                accessor: 'postalCode',
            },
            {  
                Header: 'Country',  
                accessor: 'country',
                
            },
            {
                filterable: false,
                sortable:false,
                Header: 'Action',
                accessor: 'link',
                flexGrow: 1,
                width: 100, 
                Cell: ({row}) => (
                    <div className="actions-btn-group">
                        <FaEdit size={20}
                            onClick={(e) => this.props.history.push(`/update/${row.id}`)}
                            
                        />
                        <FaTrashAlt  size={20}
                            onClick={(e) => this.deleteContact(e,row.id)}
                        />
                    </div>
                )
            },
        ]
        return (
            <div className="container">
                {
                    contacts.length > 0 ?
                    <ReactTable  
                        data={contacts}  
                        columns={columns}  
                        defaultPageSize={5}
                        noDataText={"No data at this time"}
                        className="-striped -highlight"
                    />
                    :
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      contacts: state.contacts
    };
  
};

const mapDispatchToProps = { deleteContact };


export default connect(mapStateToProps,mapDispatchToProps)(ListContact);
