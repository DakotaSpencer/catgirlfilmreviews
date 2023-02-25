import React from 'react'
import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
import "./register.css"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }


    return (
        <div className='pagediv'>
            <div className='signup' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className='spacecol'>
                    <div>Email:</div>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <div>Password:</div>
                    <input
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div>First Name:</div>
                    <input
                        type='text'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname}
                    />
                    <div>Last Name:</div>
                    <input
                        type='text'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
                    />
                    <div>Address:</div>
                    <input
                        type='text'
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <button disabled={isLoading} className='margintop'>Sign Up</button>
                    {error && <div className='error'>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Register