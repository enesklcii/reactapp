import React, { useState } from 'react'
import EmployeeAdd from './components/employeeAdd/EmployeeAdd';
import EmployeeUpdate from './components/employeeUpdate/EmployeeUpdate';
import Employeelist from './components/employelist/Employeelist'
import employees from './data/data'

export default function App() {

  const [list,setlist]=useState(employees);
  const [selectedEmployee,setSelectedEmployee]=useState({
    id:0,
    firstName:'',
    lastName:''
  })
  return (
    <div>
      <h1>adamlar {employees.length}</h1>
        
        <Employeelist employees ={list} setlist={setlist} setSelectedEmployee={setSelectedEmployee}/>
        

        <EmployeeAdd employees ={list} setlist={setlist}/>
        <EmployeeUpdate employees={employees} setlist={setlist} selectedEmployee = {selectedEmployee} setSelectedEmployee={setSelectedEmployee}/>
    </div>
  )
}
