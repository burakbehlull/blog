import React from 'react'
import Home from './pages/Home'
import {useGetPostsQuery} from './store/services/api'
function App() {
  const {data, isLoading, isError} = useGetPostsQuery()
  return (
    <>
      <Home />
      {JSON.stringify(data)}
    </>
  )
}

export default App
