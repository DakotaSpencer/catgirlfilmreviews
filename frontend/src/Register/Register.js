import React from 'react'
import {useState, useEffect} from 'react'
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
    const [errmsg, setErrmsg] = useState('');
    const emailregex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    const zipregex = RegExp(/[0-9]{5}(-)*([0-9]{4})*/)
    const passwordregex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)

    const nameregex = RegExp(/[A-ZÀ-ÿa-z]{3,}/gm);
    const addressregex = RegExp(/[a-zA-Z0-9\s,'-]+ [a-zA-Z0-9\s,'-][a-zA-Z0-9\s,'-]*$/)
    const phoneNumberRegex = RegExp(/[0-9]{10}|[0-9]{3}(-)[0-9]{3}(-)[0-9]{4}|1?(\()[0-9]{3}(\))( )?[0-9]{3}(-)[0-9]{4}/);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Called Register Form")
        try{
            if(!emailregex.test(email)){
                setErrmsg(`\nEmail is Incorrect. Email should look like this 'address@email.com'`)
                console.log("Email Regex Failed.")
            }
            if(!passwordregex.test(password)){
                setErrmsg(`\nPassword is invalid. Password should consist of: \n\t\t- 8 characters \n\t\t- A capital letter\n\t\t- A lowercase letter\n\t\t- A number and \n\t\t- A symbol`)
                console.log(errmsg)
            }
            if(!nameregex.test(firstname) && !nameregex.test(lastname)){
                setErrmsg(`First or Last name is invalid. Names should have at minimum 3 letters`)
                console.log(errmsg)
            }
            if(!zipregex.test(zip)){
                setErrmsg(`Zip Code must be at least 5 numbers and at most 9`)
                console.log(errmsg)
            }
            if(!addressregex.test(street)){
                setErrmsg(`Street should contain a space, a building/street number and a street name.`)
                console.log(errmsg)
            }
            if(!phoneNumberRegex.test(phone)){
                setErrmsg(`Phone number should contain at least 10 digits and look like this: (1234567890) or this: (123-456-7890)`)
                console.log(errmsg)
            }
            else(setErrmsg(""))
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
                        type='text'
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
                    {errmsg && <div className='error'>{errmsg}</div>}
                </div>
            </form>
        </div>
    )
}

export default Register