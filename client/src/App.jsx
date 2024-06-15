import React, { useEffect } from 'react'
import Home from './pages/Home'
import axios from 'axios'
import { setCategories } from './store/slices/keepSlice'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    async function fetchCategories(){
      await axios.get('http://localhost:80/api/categories')
      .then(res=> dispatch(setCategories([res.data])))
      .catch(err=> console.log(err))
    }
    fetchCategories()
  }, [])
  return (
    <>
      <Home />
    </>
  )
}

export default App
