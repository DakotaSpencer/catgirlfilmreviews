import React from 'react'
import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        console.log('Sttempting to login')
        e.preventDefault()

        await login(email, password)
    }


    return (
        <div className='pagediv'>
            <form className='login' onSubmit={handleSubmit}>
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
                    <button disabled={isLoading} className='margintop'>Sign Up</button>
                    {error && <div className='error'>{error}</div>}
                </div>
            </form>
        </div>
    )
}

export default Login