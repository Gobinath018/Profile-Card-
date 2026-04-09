import React from 'react'
import './ProfileCard.css'

const ProfileForm = ({ profileData, onInputChange, onClear, cardRef }) => {
  const handleDownload = async () => {
    if (!cardRef.current) return
    
    const htmlToImage = await import('html-to-image')
    const { toPng } = htmlToImage
    
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#1a1a2e'
      })
      
      const link = document.createElement('a')
      const fileName = `${profileData.name || 'profile'}_card.png`
      link.download = fileName
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Failed to download image. Please try again.')
    }
  }

  const isFormEmpty = !profileData.name && !profileData.role && !profileData.bio && !profileData.imageUrl

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>✏️ Edit Profile</h2>
        <button 
          className="clear-btn" 
          onClick={onClear}
          disabled={isFormEmpty}
        >
          🗑️ Clear All
        </button>
      </div>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profileData.name}
            onChange={onInputChange}
            placeholder="e.g., John Doe"
            autoComplete="off"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="role">Role / Title</label>
          <input
            type="text"
            id="role"
            name="role"
            value={profileData.role}
            onChange={onInputChange}
            placeholder="e.g., Frontend Developer"
            autoComplete="off"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={onInputChange}
            placeholder="Write a short bio about yourself..."
            rows="4"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="imageUrl">Profile Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={profileData.imageUrl}
            onChange={onInputChange}
            placeholder="https://example.com/avatar.jpg"
            autoComplete="off"
          />
          <p className="input-hint">Leave empty to use default avatar</p>
        </div>
        
        <div className="form-actions">
          <button 
            type="button" 
            className="download-btn"
            onClick={handleDownload}
            disabled={!profileData.name && !profileData.role && !profileData.bio}
          >
            📸 Download as Image
          </button>
        </div>
      </form>
    </div>
  )
}



export default ProfileForm