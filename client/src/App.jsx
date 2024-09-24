import React, { useEffect } from 'react'
import axios from 'axios'
import { setCategories } from './store/slices/keepSlice'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Nav } from '@partials'

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
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
