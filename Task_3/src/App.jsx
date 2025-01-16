import { useState } from 'react'
import './App.css'

function App()  {

  const [mode , setMode] = useState (false);

    return (
        <>
        <h1 className='text-5xl text-white font-bold'>Light/Dark Mode</h1>
            <button className='text-3xl rounded-md font-semibold p-3 mt-72 ' style={{backgroundColor : mode ? "White" : "Black",
            color : mode ? "Black" : "White",
            }}onClick={() =>{setMode (!mode)}}>{mode ? "Dark" : "Light"}Mode</button>
        </>
      
    );
}

export default App;
