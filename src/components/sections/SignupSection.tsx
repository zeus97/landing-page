import React from 'react'
import Signupform from '../forms/Signupform'
import '../../styles/SignupSection.css';

function SignupSection() {
  return (
    <section className='signup-section'>
      <div className='signup-section-c'>
        <div className='signup-border'>
            <Signupform />
        </div>
      </div>
    </section>
  )
}

export default SignupSection