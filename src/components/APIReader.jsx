// APIのデータを分割代入で出力するテスト
import React, { useEffect, useState } from 'react'

const APIReader = () => {
  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('network error!');
      }
      const json = await response.json();
      setData(json);
      } catch (error) {
        alert('エラーです：' + error.message)
      }
    };
    fetchData();
  }, []);

  console.log(data)

  const writeData = data.map((item, index) => {
    console.log(item)
    const {id, title, body} = item
    return <div className='container under-bar' key={item.id}>
        <p>id： {id}</p>
        <p>title： {title}</p>
        <p>body： {body}</p>
    </div>
  });

  return (
    <div>
      {(!data || data.length === 0) ? (<div>Loading...</div>) : (
        <div>
          {writeData}
        </div>
        )}
    </div>
  )

}

export default APIReader