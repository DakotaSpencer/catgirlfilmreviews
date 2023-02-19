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
                    <button disabled={isLoading}>Sign Up</button>
                    {error && <div className='error'>{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default Register