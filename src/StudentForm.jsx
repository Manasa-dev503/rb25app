import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
const studentSchema = Yup.object().shape({
    firstname:Yup.string().required("please fill the firstname").min(3,"please enter more than 3 letters"),
    lastname:Yup.string().required("please fill the lastname"),
    age:Yup.number().required("age must be filled"),
    address:Yup.string().required("please fill the address"),
    password:Yup.string().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$","password is not in pattern").required("Must enter password"),
    confirmPassword:Yup.string().test("confirm the same password",(value,formref,c)=>{
        //console.log(a,b,c)
        //return "fvdasd"
        if(value!==formref.parent.password){
            return formref.createError({message:"password and confirm password not matching"})
        }
        return true
    }).required("Must enter the same password")



})

function StudentForm() {
  return (
    <div>
        <h1>StudentForm</h1>
        <Formik 
        initialValues={{firstname:"",lastname:"",age:"",address:"",password:"",confirmPassword:""}}
        onSubmit={(values)=>{
            console.log(values)
        }}
        validationSchema={studentSchema}
        >
            {
                (fobj)=>{
                    console.log(fobj.touched)
                    return <form onSubmit={fobj.handleSubmit}>
                        <input type='text' name="firstname" onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                        <b>{fobj.touched.firstname && fobj.errors && fobj.errors.firstname}</b>
                        <br /><br />
                        
                        <input type='text' name="lastname" onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                        <b>{fobj.touched.lastname && fobj.errors && fobj.errors.lastname}</b><br /><br />
                        

                        <input type='text' name="age" onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                        <b>{fobj.touched.age && fobj.errors && fobj.errors.age}</b><br /><br />
                        <input type='text' name="address" onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                        <b>{fobj.touched.address && fobj.errors && fobj.errors.address}</b><br /><br />
                        <input type='password' name='password' onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                        <b>{fobj.touched.password && fobj.errors && fobj.errors.password}</b><br /><br />
                        <input type='confirmPassword' name='confirmPassword' onChange={fobj.handleChange} onBlur={fobj.handleBlur}/>
                        <b>{fobj.touched.confirmPassword && fobj.errors && fobj.errors.confirmPassword}</b><br /><br />
                        <button>Save</button>

                    </form>

                }
            }

        </Formik>
    </div>
  )
}

export default StudentForm