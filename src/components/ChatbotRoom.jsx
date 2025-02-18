import React, { useEffect, useRef, useState } from 'react'
import '../reset.css'
import '../css/Chatbot.css'
import ChatbotInput from './ChatbotInput'

const ChatbotRoom = () => {
  // 親でデータ管理、子でUI
  const inputLists = [
    {
        id: 0,
        question: "八百屋では何を取り扱っていますか？",
        answer: "新鮮な野菜と果物の他、自家製の糠漬けもありますよ！",
    },
    {
        id: 1,
        question: "商店街の今週の特売はなんですか？",
        answer: "水曜日に文具店でノートが割引、また金曜日に精肉店で牛肉の特売があります！",
    },
    {
        id: 2,
        question: "駐車場はありますか？",
        answer: "商店街南口にあります。商店街でお買い物いただいた際に駐車券をご提示いただくと割引があります。",
    },
    {
        id: 3,
        question: "近くの観光スポットを教えてください。",
        answer: "商店街北口から徒歩10分のところに〇〇城公園があります。お食事の後の散歩に是非どうぞ！",
    },
];

  // Inputで入力された質問を受け取る
  const [selectedQuestion, setSelectedQuestion] = useState("");
  // selectedQuestionにあるquestion,answerを蓄積する
  const [messageList, setMessageList] = useState(["ご質問をどうぞ！"]);
  // メッセージが追加されたときにリストへ追加
  const newQuestion = (text) => {
    setMessageList((prevList) => [...prevList, text]);
  };
  console.log(`Roomで受け取った内容：${selectedQuestion.question}`)
  
  // userが質問を行った場合、その質問内容及びbotからの回答を表示する
  if (selectedQuestion !== "") {
    // console.log(selectedQuestion.question)
    newQuestion(selectedQuestion.question);
    newQuestion(selectedQuestion.answer);
    // setMessageList((prevList) => [...prevList, selectedQuestion.question]);
    // setMessageList((prevList) => [...prevList, selectedQuestion.answer]);
    setSelectedQuestion("");
    console.log(messageList);
  };

  // メッセージの一番下を示すRefを追加
  const bottomRef = useRef(null);
  // メッセージリストが更新されるたびにスクロール
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }
  },[messageList]);

  return (
    <>
      <div id='room'>
        <ul>
          {messageList.map((list, index) => {
            return (
              index % 2 === 0 ?
              <li key={index} className='message-bot'>{list}</li>
              :
              <li key={index} className='message-user'>{list}</li>
            )
          })}
        </ul>
        <div ref={bottomRef}></div>
      </div>
      <div>
        <ChatbotInput inputLists={inputLists} setSelectedQuestion={setSelectedQuestion}/>
      </div>
    
    </>
  )
}

export default ChatbotRoom