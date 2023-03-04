import axios from 'axios'
import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(email, city, street, userstate, zip, phone, password, firstname, lastname) => {
        setIsLoading(true)
        setError(null)
        const data = {email, city, street, userstate, zip, phone, password, firstname, lastname}
        console.log("Data",data)

        //post request
        const response = await axios.post("https://localhost:7222/createuser",data)
        console.log(response.data)

        

        // if (!response.ok){
        //     setIsLoading(false)
        //     setError(json.error)
        // }
        // if(response.ok){
        //     //save the user to local storage via json web token
        //     localStorage.setItem('user', JSON.stringify(json))

        //     //update the auth context
        //     dispatch({type: 'LOGIN', payload: json})

        //     //set isLoading to false
        //     setIsLoading(false)
        // }
    }

    return {signup, isLoading, error}
}