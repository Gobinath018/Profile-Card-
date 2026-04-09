import React, { useState, useRef } from 'react'
import ProfileForm from './components/ProfileForm'
import ProfileCard from './components/ProfileCard'
import './App.css'

const App = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    role: '',
    bio: '',
    imageUrl: ''
  })
  
  const cardRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClear = () => {
    setProfileData({
      name: '',
      role: '',
      bio: '',
      imageUrl: ''
    })
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ Profile Card Generator</h1>
        <p>Create and customize your digital identity card</p>
      </header>
      
      <div className="app-container">
        <ProfileForm 
          profileData={profileData}
          onInputChange={handleInputChange}
          onClear={handleClear}
          cardRef={cardRef}
        />
        <ProfileCard 
          profileData={profileData}
          cardRef={cardRef}
        />
      </div>
    </div>
  )
}

export default App