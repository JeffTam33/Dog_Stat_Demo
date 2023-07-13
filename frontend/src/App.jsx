
import '../src/styles/index.css'
import Welcome from './components/Welcome';
import DogSelector from './components/DogSelector';
import DogDetails from './components/DogDetails';
import Footer from './components/Footer';
import React, { useState } from 'react';

async function getAllBreedNames(){
  let url = "http://localhost:3040/api/all/"
  let proto = 
    await fetch(url, {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    })
  sessionStorage.setItem("breeds", await proto.json())
}

await getAllBreedNames();

function App() {

  const [dog, setDog] = useState("Airdale Terrier")

  return (
    <div className="App">
      <Welcome />
      <a id="dog_selector_top"></a>
      <DogSelector dog={dog} setDog={setDog}/>
      <a id="dog_details_top"></a>
      <DogDetails dog={dog}/>
      <Footer />
    </div>
  )
}

export default App