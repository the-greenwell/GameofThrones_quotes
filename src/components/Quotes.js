import React, { useState, useEffect } from 'react';

const Quote = ({props}) => {
  return (
    <>
      <p className='text-4xl text-black font-bold'>"{props.quote}"</p>
      <p className='text-xl text-right font-bold right-10 top-5 md:right-40 relative'>- {props.quoter}</p>
    </>
  )
}

export default function Quotes({quote, loading, error}) {
  return (
    <div className='w-[100%] bg-cover h-fit lg:h-96 grid justify-center content-center p-10 quote-border justify-self-center'>
    {
      error ?
        (<p className='text-4xl text-black font-bold'>Please try again tomorrow</p>)
        :
        (loading ?
          (<p className='text-4xl text-black font-bold'>...Loading...</p>)
            :
            (quote && quote.data ? <Quote props={quote.data} /> : <p className='text-4xl text-black font-bold'> Select a character below </p>)
          )
    }
    </div>
  )
}
