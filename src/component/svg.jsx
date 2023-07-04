import React from 'react';

const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000000" d="M20,9.18V5a3,3,0,0,0-3-3H7A3,3,0,0,0,4,5v4.18A3,3,0,0,0,2,12v8a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V12A3,3,0,0,0,20,9.18ZM8,5a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1v4H8ZM20,20H4V12H20Z"/></svg>';

function SVGComponent() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <div dangerouslySetInnerHTML={{ __html: svgCode }} style={{fill: 'black'}} />
    </div>
  );
}

export default SVGComponent;