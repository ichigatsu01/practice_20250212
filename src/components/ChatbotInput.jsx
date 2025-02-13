import React from 'react'
import '../css/ChatbotInput.css'

const ChatbotInput = ({setSelectedNumber}) => {
    const inputLists = {
            1: "八百屋では何を取り扱っていますか？",
            2: "商店街の今週の特売はなんですか？",
            3: "駐車場はありますか？",
            4: "近くの観光スポットを教えてください。",
        };
    
    const onClickBtn = (key) => {
        console.log(`ボタンが押されました：${key}`);
        setSelectedNumber(key)
    };

  return (
    <>
        <div className='input-group chat-input'>
            {Object.entries(inputLists).map(([key, value]) => {
                return (
                <button key={key} className='chat-btn'
                    // onClick={() => setSelectedNumber=(key)}>
                    onClick={() => onClickBtn(key)}>
                    {key}：{value}
                </button>
            );
            })}
        </div>
    </>
  )
}

export default ChatbotInput
