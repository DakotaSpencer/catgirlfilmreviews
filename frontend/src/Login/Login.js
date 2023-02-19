import React from 'react'
import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }


    return (
        <div className='pagediv'>
            <div className='login' onSubmit={handleSubmit}>
                <h3>Log In</h3>
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

export default Login