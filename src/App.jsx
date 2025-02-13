import React, { useEffect, useState } from 'react'
// import APIReader from './components/APIReader'
import ChatbotRoom from './components/ChatbotRoom'
import ChatbotInput from './components/ChatbotInput'

function App() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  useEffect(() => {
    console.log(`親が更新されました：${selectedNumber}`)
  }, [selectedNumber]);

  return (
    <div>
      {/* <APIReader /> */}
      <ChatbotRoom selectedNumber={selectedNumber} />
      <ChatbotInput setSelectedNumber={setSelectedNumber}/>
    </div>
  )
}

export default App
