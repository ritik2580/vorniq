import React, { useEffect, useState } from 'react';
import './Profile.css';
import { FiEdit2 } from 'react-icons/fi';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileSaved, setProfileSaved] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/api/profile/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setSelectedImage(data.image || null);
        })
        .catch((err) => console.error('Error fetching profile:', err.message));
    }
  }, [userId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setUser((prevUser) => ({ ...prevUser, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/profile/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      setUser(data);
      setIsEditing(false);
      setProfileSaved(true);

      setTimeout(() => setProfileSaved(false), 3000);
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    window.location.href = '/';
  };

  if (!user) return <p style={{ textAlign: 'center' }}>Loading profile...</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Welcome, {user.name}</h2>
        <div className="profile-actions">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {profileSaved && <p className="save-success">✅ Profile saved successfully!</p>}

      <div className="profile-card">
        <div className="profile-user">
          <label htmlFor="upload-image">
            <img
              src={selectedImage || "./src/assets/notAvailable.jpg"}
              alt="Profile"
              className="avatar"
            />
          </label>
          {isEditing && (
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          )}
          <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <button className="edit-btn" onClick={() => {
            if (isEditing) handleSave();
            else setIsEditing(true);
          }}>
            <FiEdit2 /> {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Nick Name</label>
              <input
                name="nickname"
                value={user.nickname || ''}
                placeholder="Nickname"
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                readOnly={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Gender</label>
              <select
                name="gender"
                value={user.gender || ''}
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                disabled={!isEditing}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Country</label>
              <select
                name="country"
                value={user.country || ''}
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                disabled={!isEditing}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
              </select>
            </div>
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Language</label>
              <select
                name="language"
                value={user.language || ''}
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                disabled={!isEditing}
              >
                <option value="">Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Urdu">Urdu</option>
                <option value="Tamil">Tamil</option>
                <option value="Kananda">Kananda</option>
                <option value="Gujrati">Gujrati</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Region</label>
              <select
                name="timezone"
                value={user.timezone || ''}
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                disabled={!isEditing}
              >
                <option value="">Select Region</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Phone Number</label>
              <input
                name="phoneNumber"
                value={user.phoneNumber || ''}
                placeholder="Phone Number"
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                readOnly={!isEditing}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Pin Code</label>
              <input
                name="pinCode"
                value={user.pinCode || ''}
                placeholder="Pin Code"
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                readOnly={!isEditing}
              />
            </div>
            <div className="form-group">
              <label className={!isEditing ? 'blurred' : ''}>Address</label>
              <input
                name="Address"
                value={user.Address || ''}
                placeholder="Address"
                onChange={handleInputChange}
                className={!isEditing ? 'blurred-input' : ''}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
