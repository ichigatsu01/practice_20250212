import React, { useEffect, useState } from 'react'
import SandboxChild from './SandboxChild';

const Sandbox = () => {
  // オブジェクトを返す
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
    const [num, setNum] = useState(0);
    useEffect(() => {
      console.log(num);
    }, [num]);

  return (
    <div>
      <h1>Sandbox</h1>
      {inputLists.map((list) => {
        const{id, question, answer} = list;
        return <p key={id}>{id},{question},{answer}</p>
      })}
      <p>{num}</p>

      <SandboxChild inputLists={inputLists} setNum={setNum}/>
    </div>
  )
}

export default Sandbox
