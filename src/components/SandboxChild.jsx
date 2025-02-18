import React from 'react'

const SandboxChild = ({inputLists, setNum}) => {
    const onClickBtn = () => {
        setNum((prevNum) => prevNum + 1);
    };

    return (
    <div>
        <h1>SandboxChild</h1>
        <button onClick={onClickBtn}>親のぼたん</button>
        {/* <p>{inputLists}</p> */}
        {inputLists.map((list) => {
            const {id, question, answer} = list;
            return (
            <ol>
                <li>{id}</li>
                <li>{question}</li>
                <li>{answer}</li>
            </ol>
            )
        })}
    </div>
    )
}

export default SandboxChild
