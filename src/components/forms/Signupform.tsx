import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import '../../styles/Signupform.css';

interface values{
    name:string,
    email:string,
    password:string
}

function Signupform() {

    const initialValues:values = {
        name:'',
        email:'',
        password:''
    };

    const schema = yup.object().shape({
        name: yup.string().max(20,'Name too long').required('Name is required'),
        email: yup.string().email('Invalid format').required('email is required'),
        password: yup.string().min(6,'Password too short').max(20,'Password too long').required('Password is required')
    });

  return (
    <div className='signup-c' id='signup-form'>
        <h1> ¡Sign up!</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values,actions)=>{
            alert('¡Thanks for sign up!');
            actions.resetForm()}}>
           { ({values,errors,touched,isSubmitting,handleSubmit,handleChange})=>{
                return(
                    <Form onSubmit={handleSubmit}>
                        <div className='form-c'>
                            <label>Your Name*</label>
                            <Field className={errors.name && touched.name ? 'form-error' : 'form-normal'} type='text' name='name' id='form-name' value={values.name} placeholder='Enter your name' onChange={handleChange} />
                            {errors.name && touched.name && <ErrorMessage name='name' component='span'  />}
                        </div>

                        <div className='form-c'>
                            <label>Your Email*</label>
                            <Field className={errors.email && touched.email ? 'form-error' : 'form-normal'} type='email' name='email' id='form-email' value={values.email} placeholder='Enter your email' onChange={handleChange} />
                            {errors.email && touched.email && <ErrorMessage name='email' component='span' />}
                        </div>

                        <div className='form-c'>
                            <label>Password*</label>
                            <Field className={errors.password && touched.password ? 'form-error' : 'form-normal'} type='password' name='password' id='form-password' value={values.password} placeholder='Password' onChange={handleChange} />
                            {errors.password && touched.password && <ErrorMessage name='password' component='span' />}
                        </div>

                        <button type='submit'> Sign up</button>
                    </Form>
                )
            }
            }

        </Formik>

    </div>
  )
}

export default Signupform