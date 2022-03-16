import React, { useState, useEffect } from 'react';
import Quotes from './Quotes.js';
import Characters from './Characters.js';
import QuoteService from '../services/quote_service.js';

export default function Content() {
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
    <div className='w-screen h-5/6 grid content-between bg-[#FCF5E5]'>
      <button className='bg-gray-200 hover:bg-gray-100 border-b-4 border-gray-400 hover:border-gray-200 text-black p-2 w-40 h-min justify-self-center mt-2 rounded' onClick={() => setRandom(true)}> Random Quote </button>
      <Quotes loading={loading} setLoading={setLoading} quote={quote} error={error}/>
      <Characters setCharacter={setCharacter} selected={character}/>
    </div>
  )
}
