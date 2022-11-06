import { useState } from "react";

  function EmployeeAdd({employees,setlist}){

    const [values,setvalues]=useState({
        firstName:'',
        lastName:''
    })
    const handleclear =()=>{
        setvalues({
            firstName:'',
            lastName:''
        })
    }
    const handlechance =(e)=>{
        setvalues({
            ...values,
            [e.target.name] :e.target.value
        })
    }

    const submassıon=(e)=>{
        e.preventDefault();
       

            setlist([
                ...employees,
                {
                    id:employees.lenght+1,
                    ...values}
            ])
            setvalues({
                firstName:'',
                lastName:''
            })

    }

    return(
    <>
    <h3>
        employeeAdd
    </h3>

    <form onSubmit={submassıon}>
        <p>
        <input
         id="firstName" 
         name="firstName" 
         placeholder="first Name"
         value={values?.firstName}
         onChange={handlechance}
         type="text"/>


        </p>
        <p>
        <input 
        id="lastName" 
        name="lastName" 
        placeholder="last Name"
        value={values?.lastName}
        onChange={handlechance}
        type="text"/>

        </p>
        <button type="submit" >Save</button>
        <button type="button" onClick={handleclear}>Clear</button>

    </form>
    
    </>)
}
export default EmployeeAdd;