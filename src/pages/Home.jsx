import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import {Scontent, Cards, Loading, Carousel} from '../components'

function reducer(state, action)
{
    return {loading: (!state.loading)}
}



function Home() {
  const [state, dispatch] = useReducer(reducer, {loading: false});



  let api = ``;
  const fetchApiData=async(url)=>{
      try{
        const res = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${url}`);
        const data = await res.json();
        return data
      }catch(error){
        console.log(error)
      }
  }

  useEffect(() =>{
    async function hello(){
      const data = await fetchApiData(api);
    }
    hello();
  }, [])


  if(state.loading)
  {
    return(
      <>
        <main className='main'>
        <div className="container mx-auto px-4">
        <Loading/>
        </div>
        </main>
      </>
    )
  }
  else
  {
    return (
      <>
        <main className='main'>
        <div className="container mx-auto px-4">
        <Carousel/>
        <Cards/>
        <Scontent/>
        </div>
        </main>
      </>
    );
  }
}

export default Home;