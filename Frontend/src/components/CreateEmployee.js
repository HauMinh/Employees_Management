import React from 'react';
import {useState,useEffect,} from 'react';
import {Link,useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


function CreateEmployee() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const {id} = useParams();

    // const saveOrUpdateEmployee = (e) => {
    //     e.preventDefault();

    //     const employee = {firstName, lastName, emailId}

    //     if(id){
    //         EmployeeService.updateEmployee(id, employee).then((response) => {
    //             history.push('/employees')
    //         }).catch(error => {
    //             console.log(error)
    //         })

    //     }else{
    //         EmployeeService.createEmployee(employee).then((response) =>{

    //             console.log(response.data)
    
    //             history.push('/employees');
    
    //         }).catch(error => {
    //             console.log(error)
    //         })
    //     }
        
    // }

    // useEffect(() => {
    //     EmployeeService.getEmployeeById(id).then((response) =>{
    //         setFirstName(response.data.firstName)
    //         setLastName(response.data.lastName)
    //         setEmailId(response.data.emailId)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    // const title = () => {

    //     if(id){
    //         return <h2 className = "text-center">Update Employee</h2>
    //     }else{
    //         return <h2 className = "text-center">Add Employee</h2>
    //     }
    // }
    
    const saveEmployee = (e) =>{
        e.preventDefault();

        const employee = {firstName, lastName, emailId}
        console.log(employee)

        if(id){
            EmployeeService.updateEmployee(id, employee)
            .then((response) => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            
        }else{
            EmployeeService.createEmployee(employee)
            .then((response) =>{
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
        }    
    }


    useEffect(() => {
        EmployeeService.getEmployeeById(id)
        .then((response) =>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        })
        .catch(error => {
            console.log(error.response.data)
        })
    }, [])


    const title = () => {
        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }
    const button = () => {
        if(id){
            return <span className = "text-center">Update</span>
        }else{
            return <span className = "text-center">Submit</span>
        }
    }


    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                          title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        required="abc"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        required="abc"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        required="abc"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveEmployee(e)} >{ button()} </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    );
}

export default CreateEmployee;