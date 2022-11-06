import React from 'react'
import Employee from '../employee/Employee'


export default function Employeelist({employees,setlist,setSelectedEmployee}) {

    const handleOfClick=()=>{
        setlist([])
    }

    const handleremove=(id)=>{
       setlist(employees.filter(emp=>emp.id!==id))
    }
   

  return (
    <div>
      <h3>Employeelist {employees.length}</h3>{
        employees.map((emp,index)=>(
            <Employee key={index} employee= {emp} handleremove ={handleremove} setSelectedEmployee={setSelectedEmployee}/>
        ))
        
      }
      <button onClick={handleOfClick}>Clear all</button>
    </div>
  )
}
