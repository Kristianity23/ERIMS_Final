import { Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import FloatingLabelInput from '../components/input/FloatingLabelInput'
import { useState } from 'react'

const SampleComponent = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <h1 className="text-red-500 mb-4">Hello, World!</h1>
      <div className="mb-4">
      <FloatingLabelInput 
      label="First Name" 
      type="text" 
      name="first_name"
      inputClassName=""
      value={firstName} 
      onChange={(e) => setFirstName(e.target.value)}
      required 
      autoFocus
      />
      <p className="font-medium">First Name: {firstName}</p>
      </div>
      <div className="mb-4">
      <FloatingLabelInput 
      label="Last Name" 
      type="text" 
      name="last_name" 
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required 
      />
      <p className="font-medium">Last Name:</p>
      </div>
      <div className="mb-4">
      <FloatingLabelInput 
      label="Birthdate" 
      type="date" 
      name="birthdate" 
      value={birthdate}
      onChange={(e) => setBirthdate(e.target.value)}
      />
      <p className="font-medium">Birthdate: {birthdate}</p>
      </div>
      <div className="mb-4">
      <FloatingLabelInput 
      label="Password" 
      type="password" 
      name="password" 
      required 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      <p className="font-medium">Password:</p>
      </div>
    </> 
  )
}

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element ={<AppLayout />}>
            <Route path="/" element={<SampleComponent />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes