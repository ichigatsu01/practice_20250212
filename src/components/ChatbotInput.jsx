import React from 'react'

const ChatbotInput = ({inputLists, setSelectedQuestion}) => {
    const onClickBtn = (btnId) => {
        // console.log(`ボタンが押されました：${btnId}`);
        const getList = inputLists.find((list) => {
            return list.id === btnId
        })
        console.log(`getListの内容：${getList.id}, ${getList.question}, ${getList.answer}`);
        setSelectedQuestion(getList);
    }
    return (
        <div className='container'>
        {inputLists.map((list) => {
            const {id, question} = list
            return(
                <button key={id} onClick={() => onClickBtn(id)}>
                    {id+1} : {question}
                </button>
            )
        })}
    </div>
  )
}

export default ChatbotInput
