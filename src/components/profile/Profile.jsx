import React from 'react'
import Navbar from '../general/Navbar';
import Cover from './Cover';
import Footer from '../general/Footer';
import Videos from './Videos';
import './Profile.css'
import Posts from './Posts';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Cover />
        <Videos />
        <Posts />
        <Footer />
      </div>
    </>
  )
}

export default Profile