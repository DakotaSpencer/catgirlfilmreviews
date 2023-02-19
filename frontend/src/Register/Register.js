import React from 'react'
import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }


    return (
        <div className='pagediv'>
            <form className='signup' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <label>Email:</label>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <div className='p-2'></div>
                <label>Password:</label>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button className='m-4' disabled={isLoading}>Sign Up</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default Register