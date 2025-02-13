import React from 'react'
import '../reset.css'

const ChatbotRoom = ({selectedNumber}) => {
  const createMessage = () => {
    
  };

  return (
    <div id='#room'>
      <div className='box-left'>
        <p className='message-box white'>ご質問をどうぞ！</p>
      </div>
      <div className='box-right'>
        <p className='message-box green'>※仮表示・・・あとで消す</p>
      </div>
      <p>{console.log(`roomが更新されました：${selectedNumber}`)}</p>
    </div>
  )
}

export default ChatbotRoom