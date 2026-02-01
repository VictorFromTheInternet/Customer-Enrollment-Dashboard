import { useState } from 'react'
import Layout from './Layout'
import {Button} from '@/components/ui/button' 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <input type="text" name="" id="" value={`${count}`} disabled/>


      <div className="flex flex-center justify-center align-center gap-2">
        <Button onClick={()=>{setCount((prev) => prev+1)}}>
          Increment
        </Button>

        <Button onClick={()=>{setCount((prev) => prev-1)}}>
          Decrement
        </Button>
      </div>
    </Layout>   

    </>
  )
}

export default App
