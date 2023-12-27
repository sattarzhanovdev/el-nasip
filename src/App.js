import React from 'react'
import { MainRoutes } from './routes'
import './App.scss'
import axios from 'axios'

axios.defaults.baseURL = 'https://el-nasip-default-rtdb.asia-southeast1.firebasedatabase.app'

function App() {
  return (
    <div>
      <MainRoutes />
    </div>
  )
}

export default App