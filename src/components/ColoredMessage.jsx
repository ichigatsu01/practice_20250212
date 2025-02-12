import React from 'react'

const ColoredMessage = ({color, children}) => {
    const contentStyle = {
        color: color,
        fontSize: "20px",
        border: "1px solid #000"
    };

  return( 
  <div>
      <p style={contentStyle}>{children}</p>
      {console.log(contentStyle)}
  </div>)
}

export default ColoredMessage
