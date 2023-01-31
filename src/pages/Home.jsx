import React from 'react';
import {Navbar,Lights, Scontent, Cards, Loading} from '../components'


function Home() {

  return (
    <>
      <main className='main'>
      <div className="container mx-auto px-4">
      <Loading/>
      <Scontent/>
      </div>
      </main>
    </>
  );
}

export default Home;