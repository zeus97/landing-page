import React from 'react'
import '../../styles/SignupSection.css';

//Form component
import Signupform from '../forms/Signupform'

function SignupSection() {
  return (
    <section className='signup-section'>
      <div className='signup-section-c'>
        <div className='signup-border-c'>
          <div className='signup-border'></div>
          <Signupform />
        </div>
      </div>
    </section>
  )
}

export default SignupSection