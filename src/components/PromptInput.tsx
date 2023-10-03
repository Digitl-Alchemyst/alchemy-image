/* eslint-disable react/function-component-definition */
'use client';

import React, { useState } from 'react';

function PromptInput() {
  const [input, setInput] = useState('');

  return (
    <div className='mt-10'>
      <form className='flex flex-col items-center space-x-3 rounded-lg border py-1 pl-1 pr-3 shadow-md shadow-slate-400/30 lg:flex-row lg:divide-x'>
        <textarea
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          defaultValue='Enter a prompt'
          placeholder='Enter a prompt to generate an image...'
          className='flex-1 rounded-md bg-slate-200 px-4 py-2 text-slate-800 outline-none'
        />
        <button
          //   className={`rounded-b-md border-none px-4 py-2 font-bold  md:rounded-l-md md:rounded-br-none ${
          // input
          //   ? 'bg-alch2 text-slate-400 transition-colors duration-300'
          //   : 'cursor-not-allowed bg-slate-600 text-slate-200'
          //   }`}
          type='submit'
          // disabled={!input}
        >
          Generate
        </button>
        <button
          className='border-none bg-alch1 px-4 py-2 font-bold text-slate-300 transition-colors duration-300 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-slate-100'
          type='button'
        >
          Use Suggestion
        </button>
        <button
          className='rounded-b-md border-none bg-slate-300 px-4 py-2 font-bold text-alch1 transition-colors duration-300 md:rounded-r-md md:rounded-bl-none'
          type='button'
        >
          New Suggestion
        </button>
      </form>
    </div>
  );
}

export default PromptInput;
