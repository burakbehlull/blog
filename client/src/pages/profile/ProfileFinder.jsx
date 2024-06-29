import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Profile() {
    const [posts, setPosts] = useState(null)
    const [user, setUser] = useState([])
    const [error, setError] = useState('')

    const {username} = useParams()

    useEffect(()=>{
        axios.post('http://localhost:80/api/findUser', { username: username }).then(res => {
            const info = res.data
			setUser(info.user)
            setPosts(info.posts)
        }).catch(err => {
            setError(err.message)
        })
    }, [])
    return (
        <>
            <h1>Profile</h1>
            <h3> User Id: {username || ""} </h3>

            {user && <h3> User: {user.displayName || "" } </h3>}
            {error && <h3> {error || "" } </h3>}
            <h3> Posts: </h3>
            <ul>
                {posts?.map(post => <li key={post._id}>{post.title}</li>)}
            </ul>
        </>
    )
}

export default Profile
