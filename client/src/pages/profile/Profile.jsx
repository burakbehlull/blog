import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

function Profile(){
    const [profilecookie, setProfileCookie, removeProfileCookies] = useCookies()
    const username = profilecookie['username']
    const token = profilecookie['token']
    const [verifyData, setVerifyData] = useState({})
    const [error, setError] = useState({})

    useEffect(()=> {
        async function verifyUser(){
            await axios.post('http://localhost:80/auth/profileVerify', {
                token: token
            })
            .then(res=> setVerifyData(res.data))
            .catch(error=> setError(error))
        }
        verifyUser()
    }, [])
    return(
        <>
            Profile
            username: {username}
            {JSON.stringify(verifyData)}
            
        </>
    )
}

export default Profile