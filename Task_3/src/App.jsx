import { useState } from 'react';
import './App.css';

function App() {
  const [mode, setMode] = useState(false);

  return (
    <>
  <i><h1 className='text-5xl font-bold text-center mt-8 text-white'>
        Light/Dark Mode
      </h1></i>
      <button
        className='text-3xl rounded-md font-semibold p-3 mt-72 mx-auto block sm:mt-36 sm:text-xl'
        style={{
          backgroundColor: mode ? 'White' : 'Black',
          color: mode ? 'Black' : 'White',
        }}
        onClick={() => { setMode(!mode); }}
      >
        {mode ? 'Dark' : 'Light'} Mode
      </button>
    </>
  );
}

export default App;
