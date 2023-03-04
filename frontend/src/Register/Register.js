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
                    <div>City:</div>
                    <input
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <div>State:</div>
                    <input
                        type='text'
                        onChange={(e) => setUserState(e.target.value)}
                        value={userstate}
                    />
                    <div>Street:</div>
                    <input
                        type='text'
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                    />
                    <div>Zip Code:</div>
                    <input
                        type='text'
                        onChange={(e) => setZip(e.target.value)}
                        value={zip}
                    />
                    <div>Phone:</div>
                    <input
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