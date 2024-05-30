import React, { useState } from 'react'
import './Detail.css'
import { auth, db } from '../../lib/Firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'


const detail = () => {

  
  const {chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =useChatStore();
  
  const {currentUser} = useUserStore();
  
  const handleBlock = async () => {
    
    if(!user) return;
    
    const userDocRef = doc(db, "users", currentUser.id)
    
    try {
      
      await updateDoc(userDocRef, {
        
        blocked : isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      
      changeBlock( )
      
    } catch (error) {
      
      console.log(error)
      
    }
  }
  
  const [setting,setSetting] = useState('none');
  
  const handleSettings = () => {
    
    if(setting == 'none'){
      
      setSetting(true);
      
    }
    else if(setting ==  true) {
      setSetting('none');
    }  

  }

  return (
    <div className="detail"> 
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>{(isCurrentUserBlocked || isReceiverBlocked) ? "You cannot send a message" : "Hey there, Nice to See You Again."}</p>
      </div>

      <div className="info">
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src={setting == true ? "./arrowDown.png" : "./arrowUp.png"} alt="" onClick={handleSettings}/>
          </div>
        </div>
        <button style={{display : setting}} onClick={handleBlock}>
          {isCurrentUserBlocked 
          ? "You are Blocked" 
          : isReceiverBlocked 
          ? "User Blocked" 
          : "Block User"}
          </button>
        <button style={{display : setting}} className='logout' onClick={() => auth.signOut()}>Log Out</button>
      </div>
    </div>
  )
}

export default detail
