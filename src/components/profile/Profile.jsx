import React from 'react'
import Navbar from '../general/Navbar';
import Cover from './Cover';
import Footer from '../general/Footer';
// import Videos from './Videos';
import './Profile.css'
import Presentation from './Presentation';
// import Posts from './Posts';
// import PlayerDetails from './PlayerDetails';

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Cover />
        <Presentation />
        {/* <PlayerDetails /> */}
        {/* <Videos /> */}
        {/* <Posts /> */}
        <Footer />
      </div>
    </>
  )
}

export default Profile