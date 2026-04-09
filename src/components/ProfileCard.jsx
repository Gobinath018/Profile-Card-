import React from 'react'
import './ProfileCard.css'

const DEFAULT_AVATAR = "https://api.dicebear.com/7.x/avataaars/svg?seed=default&backgroundColor=b6e3f4"

const ProfileCard = ({ profileData, cardRef }) => {
  const { name, role, bio, imageUrl } = profileData
  
  const displayImage = imageUrl && imageUrl.trim() !== "" ? imageUrl : DEFAULT_AVATAR
  
  const isProfileEmpty = !name && !role && !bio

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2>👤 Live Preview</h2>
        <span className="live-badge">LIVE</span>
      </div>
      
      <div ref={cardRef} className="profile-card">
        {/* Card Decorative Elements */}
        <div className="card-bg-pattern"></div>
        <div className="card-accent"></div>
        
        <div className="card-content">
          <div className="avatar-container">
            <img 
              src={displayImage} 
              alt={`${name || 'User'}'s avatar`}
              className="avatar"
              onError={(e) => {
                e.target.src = DEFAULT_AVATAR
              }}
            />
          </div>
          
          {isProfileEmpty ? (
            <div className="empty-state">
              <div className="empty-icon">✨</div>
              <p>Your profile card will appear here</p>
              <small>Fill out the form to see the live preview</small>
            </div>
          ) : (
            <>
              <h2 className="profile-name">{name || 'Anonymous User'}</h2>
              <p className="profile-role">{role || 'No role specified'}</p>
              <div className="divider"></div>
              <p className="profile-bio">{bio || 'No bio added yet. Click edit to add your story.'}</p>
              
              <div className="profile-footer">
                <div className="social-icons">
                  <span className="social-icon">📧</span>
                  <span className="social-icon">🐦</span>
                  <span className="social-icon">💼</span>
                  <span className="social-icon">📷</span>
                </div>
                <div className="profile-date">
                  Member since 2024
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      
      <div className="preview-note">
        <p>💡 Tip: The card above updates in real-time as you type!</p>
      </div>
    </div>
  )
}

export default ProfileCard