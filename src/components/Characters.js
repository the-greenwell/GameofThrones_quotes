import React, { useState, useRef, useEffect } from 'react';

export default function Character({ setCharacter, selected }) {
  const images = require.context('../../public/character_images', true);
  const characters = ['arya_stark','jon_snow','daenerys_targaryen','tyrion_lannister','cersei_lannister','lord_varys','oberyn_martell','petyr_baelish']
  const crown = images('./crown.png')

  return (
    <div className='flex flex-wrap justify-center justify-around self-end pb-1'>
      {characters.map((char) => {
        const sprite = images(`./${char}.png`);
        return (
            <li key={char} className={`list-none cursor-pointer h-80 grid content-end ${'basis-1/'+characters.length}`} onClick={(char) => { setCharacter(char.target.id) }}>
              {selected && selected === char ? <img src={crown} className='md:h-12 h-8 justify-self-center mb-2' /> : ''}
              <img src={sprite} id={char} className={`object-cover h-52 ${selected && selected === char ? 'md:h-[18rem]' : 'md:h-64 md:hover:h-72'}`} />
            </li>
        )
      })}
    </div>
  )
}
