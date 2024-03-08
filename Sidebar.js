import React from 'react'
import './Mystyles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from './ConversationItem';
import { useState } from 'react';

function Sidebar() {
    const  [conversations, setconversations] = useState([

        {
            name:"Test#1",
            lastMessage:"last Message #1",
            timeStamp:"today",
        },
        {
            name:"Test#2",
            lastMessage:"last Message #2",
            timeStamp:"today",
        },
        {
            name:"Test#3",
            lastMessage:"last Message #3",
            timeStamp:"today",
        }
    ]);
  return (
    <div className='side-contain'>
        <div className='sb-header'>
        <div>
        <IconButton>
        <AccountCircleIcon/>
        </IconButton>
        </div>
        <div>
        <IconButton>
            <PersonAddAltIcon/>
        </IconButton>
        <IconButton>
            <GroupAddIcon/>
        </IconButton>
        <IconButton>
            <AddCircleIcon/>
        </IconButton>
        <IconButton>
            <DarkModeIcon/>
        </IconButton>
        </div>
        
        </div>
        <div className='sb-search'>
        <IconButton>
        <SearchIcon/>
        </IconButton>
            <input placeholder='Search' className='search-box'/>
        </div>
        <div className='sb-conversation'>
            {conversations.map((conversation)=>{
                return( <ConversationItem props={conversation} key={conversation.name}/>
                );
            })}
        </div>
    </div>
  );
}

export default Sidebar;