import React from 'react'
import {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
import "./register.css"

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [userstate, setUserState] = useState('')
    const [zip, setZip] = useState('')
    const [phone, setPhone] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Called Register Form")
        try{
            await signup(email, city, street, userstate, zip, phone, password, firstname, lastname)
        }catch(err){
            console.log(err)
        }
        
        //UserEmail, UserCity, UserStreet, UserState, UserZIP, UserPhone, UserPassword, UserFirstName, UserLastName. 
    }


    return (
        <div className='pagediv'>
            <form className='signup' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <div className='spacecol'>
                    <label htmlFor='first-name'>First Name:</label>
                    <input
                        id='first-name'
                        type='text'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname}
                    />
                    <label htmlFor='last-name'>Last Name:</label>
                    <input
                        id='last-name'
                        type='text'
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
                    />
                    <label htmlFor='email'>Email:</label>
                    <input
                        id='email'
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label htmlFor='password'>Password:</label>
                    <input
                        id='password'
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <label htmlFor='street'>Street:</label>
                    <input
                        id='street'
                        type='text'
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                    />
                    <label htmlFor='city'>City:</label>
                    <input
                        id='city'
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <label htmlFor='state'>State:</label>
                    <input
                        id='state'
                        type='text'
                        onChange={(e) => setUserState(e.target.value)}
                        value={userstate}
                    />
                    <label htmlFor='zip'>Zip Code:</label>
                    <input
                        id='zip'
                        type='text'
                        onChange={(e) => setZip(e.target.value)}
                        value={zip}
                    />
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        type='text'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <button disabled={isLoading} className='margintop'>Sign Up</button>
                    {error && <div className='error'>{error}</div>}
                </div>
            </form>
        </div>
    )
}

export default Register