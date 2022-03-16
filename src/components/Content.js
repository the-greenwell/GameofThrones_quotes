import React, { useState, useEffect } from 'react';
import QuoteService from '../services/quote_service.js';

export default function Content({children}) {
  const [character, setCharacter] = useState('');
  const [quote, setQuote] = useState({});
  const [error, setError] = useState(false);
  const [random, setRandom] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(character){
      setLoading(true);
      QuoteService.quoteByChar(character).then((res) => {
        setQuote(res)
      }).then(()=>{
        setLoading(false)
      }).catch((err)=>{
        setError(true)
        console.log(err)
      })
    }
  },[character])

  useEffect(()=>{
    if(random){
      setLoading(true);
      QuoteService.randomQuote().then((res) => {
        setQuote(res)
        setCharacter(res.data.quoter_key)
      }).then(()=>{
        setLoading(false)
        setRandom(false)
      }).catch((err)=>{
        setError(true)
        console.log(err)
      })
    }
  },[random])

  return (
    <div className='w-screen h-5/6 grid content-between bg-[#FCF5E5] pt-3 px-5'>
      {React.cloneElement(children[0], {loading:loading, setLoading:setLoading, quote:quote, error:error, setRandom:setRandom})}
      <button className='bg-yellow-300 hover:bg-yellow-200 border-b-4 border-yellow-500 hover:border-yellow-400 text-black p-2 w-60 h-min justify-self-center mt-2 rounded' onClick={() => setRandom(true)}> Random Quote </button>
      {React.cloneElement(children[1], {setCharacter: setCharacter, selected: character})}
    </div>
  )
}
