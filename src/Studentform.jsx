import React from 'react';
import { Formik } from 'formik';
function Student(){
    return (
        <div className='mybox'>
            <h1>StudentForm</h1>
            <Formik
               initialValues={{firstname:"",lastname:"",age:"",address:""}}
               onSubmit={(sobj)=>{
                console.log(sobj)
               }}
            >
            {
                (fobj)=>{
                    return (
                        <form onSubmit={fobj.handleSubmit}>
                            <input type='text' placeholder='FirstName' name='firstname' onChange={fobj.handleChange}/><br />
                            <input type='text' placeholder='LastName' name='lastname' onChange={fobj.handleChange}/><br />
                            <input type='text' placeholder='Age' name='age' onChange={fobj.handleChange}/><br />
                            <input type='text' placeholder='Address' name='address' onChange={fobj.handleChange}/><br /><br />
                            <button>Save</button>


                        

                        </form>
                    )
                }
            }

            </Formik>
        </div>
    )

}
export default Student;