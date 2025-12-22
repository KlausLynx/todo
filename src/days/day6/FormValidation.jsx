import React from 'react'
import { useState } from 'react';

const FormValidation = () => {
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const passwordValidator = (password) => {
        if(password.length < 8){
            return false;
        }
        return true;
    }

    const handlePasswordChange = (e) => {
        const pwd = e.target.value;
        setPassword(pwd);
        setIsValid(passwordValidator(pwd));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isValid){
            alert("Please fix the errors before submitting the form.");
            return;
        }   
        console.log("Form submitted successfully!");
    }

  return (
    <div>
        <form action="" method="post" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            {!isValid && password && (
                <p style={{color: 'red'}}>Password must be at least 8 characters long.</p>
            )}
            <button type="submit" className=' bg-blue-700 px-4 py-2 rounded cursor-pointer'>Register</button>
        </form>
    </div>
  )
}

export default FormValidation