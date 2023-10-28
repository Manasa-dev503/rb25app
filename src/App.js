import logo from './logo.svg';
import './App.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
const contactSchema = Yup.object().shape({
  name:Yup.string(),
  number:Yup.number(),
  email:Yup.string(),
  ImageURL:Yup.string()

})
function App() {
  return (
    <div className="mybox">
      <h1 className='text-success text-center'>Add Contact Cards</h1>
     <Formik 
       initialValues={{name:"",number:"",email:"",ImageURL:""}}
       onSubmit={(sobj)=>{
       console.log(sobj)
       //<div className='card'>
       //<img src={sobj.ImageURL} class="card-img-top" />
       //<div class="card-body">
        // <h3><b>Name:</b>{sobj.name}</h3>
        // <h3><b>Number:</b>{sobj.number}</h3>
        //</div> <h3><b>Email:</b>{sobj.email}</h3>
      //</div>

    // </div>
      
      }}
      validationSchema={contactSchema}
      >
      {
        (fobj)=>{
          return (
            <form onSubmit={fobj.handleSubmit}>
              <center><span className='text-danger'>Name:</span><input type='text' name='name' onChange={fobj.handleChange} onBlur={fobj.handleBlur}/><br/><br/>
              <span className='text-danger'>Number:</span><input type='number' name='number' onChange={fobj.handleChange} onBlur={fobj.handleBlur}/><br/><br/>
              <span className='text-danger'>Email:</span><input type='email' name='email' onChange={fobj.handleChange} onBlur={fobj.handleBlur}/><br/><br/>
              <span className='text-danger'>Enter Image URL:</span><input type='text' name='ImageURL' onChange={fobj.handleChange} onBlur={fobj.handleBlur}/><br/><br/>
              <button className='btn-warning' type='submit'>Add Contact</button></center>





            </form>
          )
        }
      }

     </Formik>
      
      
    </div>
  );
}

export default App;
