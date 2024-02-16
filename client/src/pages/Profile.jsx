import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {username} = useParams()
    return (
        <>
            <h1>Profile</h1>
            <h3> User Id: {username} </h3>
        </>
    )
}

export default Profile
