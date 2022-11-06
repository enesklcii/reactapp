import React from 'react'

export default function EmployeeUpdate({employees,setlist,selectedEmployee,setSelectedEmployee}) {


    const handleChange =(e)=>{
        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.name] : e.target.value
        })

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setlist([
            ...employees.filter(emp=>emp.id!==selectedEmployee.id),
            selectedEmployee
        ])
    }

  return (
    <div>
      <h3>Employee Update</h3>
      <p>{JSON.stringify(selectedEmployee)}</p>

        <form onSubmit={handleSubmit}>

            <input 
            id='firstName' 
            name='firstName'  
            onChange={handleChange} 
            value={selectedEmployee?.firstName}
            placeholder="first Name"
            type="text"
            />
            <input 
            id='lastName' 
            name='lastName'  
            onChange={handleChange} 
            value={selectedEmployee?.lastName}
            placeholder="last Name" 
            type="text"
            />

            <button type='submit'>Update</button>

        </form>

    </div>
  )
}
