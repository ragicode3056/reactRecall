import { useState } from "react";
export const Forms =() =>{
    
    const initialValues = {
        fname: "",
        job:""
    }
    const [values,setValues] = useState(initialValues);
   
    const handleInpChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value,
        })
    }
    return(
        <div>
            <form>
                <input type="text" value = {initialValues.fname} onChange = {handleInpChange} />
                {/* <input type="text" id="Name" value = {inputFiled.fname} onChange = {(e) => setInpFiled(e.target.value)}>Name</input> */}
                {/* <input type="text" id="Job" value = {inputFiled.job} onChange = {inputHanlder}>Job</input> */}
            </form>
            <div>
                <div>My name is {}</div>
                <div>My job title is {}</div>
            </div>
        </div>
    )
}