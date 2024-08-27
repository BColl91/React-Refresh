import './App.css';
import Box from './components/box';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState(" ");
  const characterArray = [
    { name: "George" },
    { name: "Kate" },
    { name: "notGeorge" },
    { name: "Will" }
  ];

  // Original for loop with fixed array name
  for (let index = 0; index < characterArray.length; index++) {
    console.log(characterArray[index]);    
  }

  // The equivalent of the for loop using map
  characterArray.map((item, index) => {console.log(item)});

  //FETCH
  const getImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list")
    const data = await response.json();
    console.log(data);
    
  }
getImages();
  return (
      //  <input onChange={(event) => setUser(event.target.value)} />
      
      // {/* CONDITIONAL RENDERING */}
      // {user && <Box name={user} />}
      // {/* the {} allows us to inspect Javascript. The && acts as an if statement,
      //      so if user exists, display what is to the right of the &&;
      //      if user doesn't exist, display nothing */}
      
      // {/* Ternary Operator for Conditional Rendering */}
      // {user === "Bex" ? <Box name={user} /> : <h1>Nothing typed in</h1>}
      // {/* ? and : act as an if-else statement */}
      
      // {/* Static Box component */}
      // <Box name="Bex" />

      // {/* Map through characterArray and render Boxes */}
      // {characterArray.map((item, index) => {
      //   return (
      //     <div key={index}>
      //       <Box name={item.name} />
      //     </div>
      //   );
      // })}
    <div>
      {/* Static Boxes */}
    </div>
  );
}

export default App;
