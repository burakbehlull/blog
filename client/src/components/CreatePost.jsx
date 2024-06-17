import React, {useEffect, useState} from "react"
import axios from 'axios'
import { useCookies } from "react-cookie"

export default function CreatePost(){
    const [values, setValues] = useState({
        title: '',
        description: '',
        category: ''
    })
    const [data, setData] = useState('')
    const [error, setError] = useState({})
    const [categories, setCategories] = useState([])
    const [cookies, setCookies] = useState({})
    if(cookies?.token) {
        setError({
            success: true,
            message: 'Token yok.'
        })
    }
    const cookiess = useCookies()

    useEffect(()=> {
        setCookies(cookiess)
        async function fetchCategories(){
          await axios.get('http://localhost:80/api/categories')
          .then(res=> setCategories(res.data['category']))
          .catch(err=> console.log(err))
        }
        fetchCategories()
    }, [])

    const submitHandle = async (e)=> {
        e.preventDefault()
        const getToken = cookies[0].token ?? undefined
        await axios.post('http://localhost/api/createPost', {
            title: values.title,
            description: values.description,
            category: values.category,
            token: getToken
        }).then((res)=> {
            setData(res.data)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    const handleChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    return(
        <>  
            {error.success && error?.message}
            <form onSubmit={submitHandle} method="POST">
                <input type="text" name="title" value={values.title} onChange={handleChange} />
                <input type="text" name="description" value={values.description} onChange={handleChange} />
                <select name="category" onChange={handleChange} >
                    <option value={null} defaultChecked>Kategori seçiniz</option>
                    {categories.map((c, key)=> 
                        <option value={c._id} key={key}> {c.name} </option>
                    )}
                </select>
                <button>Gönder</button>
            </form>
        </>
    )
}