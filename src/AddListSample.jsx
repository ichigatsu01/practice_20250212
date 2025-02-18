// リスト操作
import React, { useState } from 'react'

const AddListSample = () => {
  const [message, setMessage] = useState("");
  const [lists, setLists] = useState([]);

  const clickBtn = () => {
    console.log("ボタンが押されました");
    let nowDate = Date.now();
    setMessage(nowDate);

    // 生成されたmessageをlistsに追加したい
    setLists((prevLists) => [...prevLists, nowDate])

    
  };

  return (
    <div>
        <h1>リスト操作テスト</h1>
        <button onClick={clickBtn}>ぼたん</button>
        <p style={{borderBottom: '1px solid #000', paddingBottom:'20px'}}>{message}</p>
        {/* <p>{lists}</p> */}
        {lists.map((list, index) => {
          return <p key={index}>{list}</p>
        })}
    </div>
  )
};

export default AddListSample