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
            <form className='login' onSubmit={handleSubmit}>
                <h3>Log In</h3>

                <label>Email:</label>
                <input
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <div className='p-2'></div>
                <label>Password:</label>
                <input
                    type='text'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button className='m-4' disabled={isLoading}>Log In</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default Login