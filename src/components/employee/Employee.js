import React from 'react'


export default function Employee({employee,handleremove,setSelectedEmployee}) {
   
  const handleSelectedEmployee = (emp)=>{
      setSelectedEmployee(emp);
      
  }
  return (
    <div>
      {employee.firstName} {employee.lastName}
      <button onClick={()=>handleremove(employee.id)}>Remove</button>
      <button onClick={()=> handleSelectedEmployee(employee)}>Select</button>
    </div>
  )
}
