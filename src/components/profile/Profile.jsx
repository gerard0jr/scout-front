import React, {useState} from 'react'
import Navbar from '../general/Navbar';
import Cover from './Cover';
import Footer from '../general/Footer';
import './Profile.css'
import Presentation from './Presentation';
import Record from './record/Record'
import SportRecord from './SportRecord';

const Profile = () => {

  const [category, setCategory] = useState('presentation')

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <Cover category={category} setCategory={setCategory} />
        { category === 'presentation' ? <Presentation /> :
          category === 'record' ? <Record /> :
          <SportRecord />}
        <Footer />
      </div>
    </>
  )
}

export default Profile