import React from 'react';
import {Navbar,Lights, Scontent, Cards, Loading} from '../components'


function Home() {

  return (
    <>
      <Navbar/>
      <main className='main'>
      <Lights />
      <div className="container mx-auto px-4">
      <Loading/>
      <Scontent/>
      </div>
      </main>
    </>
  );
}

export default Home;