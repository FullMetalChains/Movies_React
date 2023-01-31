import React from 'react';
import { useParams } from 'react-router-dom';


function Achievements() {
    const {id} = useParams();
  return (
    <>
        <div style={{"text-align":"center"}}>
            Hello, {id?(id):("Noname")}
        </div>
    </>
  );
}

export default Achievements;