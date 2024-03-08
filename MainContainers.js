import React from 'react'
import './Mystyles.css'
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

function MainContainers() {
  return (
    <div className='main-container'>
        <Sidebar/>
        <ChatArea/>
    </div>
  )
}

export default MainContainers;