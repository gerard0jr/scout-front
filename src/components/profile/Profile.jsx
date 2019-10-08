import React from 'react'
import Navbar from '../general/Navbar';
import Cover from './Cover';
import Footer from '../general/Footer';
import './Profile.css'
// import Presentation from './Presentation';
import Record from './record/Record'
// import SportRecord from './SportRecord';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Cover />
        {/* <Presentation /> */}
        <Record />
        {/* <SportRecord /> */}
        <Footer />
      </div>
    </>
  )
}

export default Profile