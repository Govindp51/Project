import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea({ props }) {
  return (
    <div className="chatArea-container">
      
        <IconButton>
          <DeleteIcon/>
        </IconButton>

     <div className="Message-container">
        <MessageOthers/>
        <MessageSelf/>
     </div>
     <div className="text-input-area">
     <input type="text" placeholder="Type a Message" className="search-box"/>
       <IconButton>
        <SendIcon/>
       </IconButton>
     </div>
    </div>
  );
}

export default ChatArea;
