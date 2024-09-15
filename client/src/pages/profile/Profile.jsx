import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

function Profile(){
    const [profilecookie, setProfileCookie, removeProfileCookies] = useCookies()
    const username = profilecookie['username']
    const token = profilecookie['token']
    const [verifyData, setVerifyData] = useState({})
    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    useEffect(()=> {
        async function verifyUser(){
            await axios.post('http://localhost:80/auth/profileVerify', {
                token: token
            })
            .then(res=> {
                setVerifyData(res.data)
                setUser(res.data['user'])
            })
            .catch(error=> setError(error))
        }
        verifyUser()
    }, [])
    return(
        <div id="profile">
            Profile
            <h3>username: {username}</h3>
            {JSON.stringify(verifyData)}
            
        </div>
    )
}

export default Profile