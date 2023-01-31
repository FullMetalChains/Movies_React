import React from 'react';
import { useParams } from 'react-router-dom';


function NotFound() {
  return (
    <>
        <div style={{"text-align":"center"}}>
            This route doesn't exist YO!
        </div>
    </>
  );
}

export default NotFound;