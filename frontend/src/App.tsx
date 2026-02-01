import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReferralDashboard from './pages/ReferralDashboard'
import ReferralForm from './pages/ReferralForm'
import EnrollmentForm from './pages/EnrollmentForm'
import CustomerDashboard from './pages/CustomerDashboard'
import Layout from './Layout'
import {Button} from '@/components/ui/button' 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ReferralDashboard></ReferralDashboard> }></Route>
          <Route path="/referral-form" element={<ReferralForm></ReferralForm> }></Route>
          <Route path="/enrollment-form" element={<EnrollmentForm></EnrollmentForm> }></Route>
          <Route path="/customer-dash" element={<CustomerDashboard></CustomerDashboard> }></Route>
        </Routes>        
      </Layout>   
    </BrowserRouter>    
  )
}

export default App
