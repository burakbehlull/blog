import React, {useEffect, useState} from "react"
import axios from 'axios'

export default function CreatePost(){
    const [values, setValues] = useState({
        title: '',
        description: '',
        category: ''
    })
    const [data, setData] = useState('')
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        async function fetchCategories(){
          await axios.get('http://localhost:80/api/categories')
          .then(res=> setCategories(res.data['category']))
          .catch(err=> console.log(err))
        }
        fetchCategories()
      }, [])

    const submitHandle = (e)=> {
        e.preventDefault()
        axios.post('http://localhost/api/createPost', {
            title: values.title,
            description: values.description,
            category: values.category
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
            {JSON.stringify(categories)}
            {JSON.stringify(values)}
            <form onSubmit={submitHandle} method="POST">
                <input type="text" name="title" value={values.title} onChange={handleChange} />
                <input type="text" name="description" value={values.description} onChange={handleChange} />
                <select name="category" onChange={handleChange} >
                    <option value={null} defaultChecked>Kategori seçiniz</option>
                    {categories.map((c)=> 
                        <option value={c._id}> {c.name} </option>
                    )}
                </select>
                <button>Gönder</button>
            </form>
        </>
    )
}