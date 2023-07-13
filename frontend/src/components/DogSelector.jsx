import React, { useState } from 'react';
import GraphContainer from '../components/GraphContainer';
import Options from '../components/Options';
import '../styles/DogSelector.css'

function DogSelector(props) { 
  const [heightMale, setHeightMale] = useState("23-24 in (58-61 cm)");
  const [heightFemale, setHeightFemale] = useState("22-23 in (56-58 cm)");
  const [weightMale, setWeightMale] = useState("40-50 lb (18-23 kg)");
  const [weightFemale, setWeightFemale] = useState("35-40 lb (16-18 kg)");
  const [longevity, setLongevity] = useState("10-12 yrs");
  const [groom, setGroom] = useState(3);
  const [activity, setActivity] = useState(3);
  const [bark, setBark] = useState(3);
  const [dogPic, setDogPic] = useState("https://cdn.midjourney.com/67878c3c-469a-499b-8120-ad030b913a27/0_2.png");

  const [visibility, setVisibility] = useState(true)

  async function setCurrentBreed(){
    let url = "http://localhost:3040/api/dog/" + props.dog
    let proto = 
      await fetch(url, {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
      })
  
    let dogObj = await proto.json()

    if (!dogObj) {
      return 0;
    }
    setHeightMale(dogObj.heightMale)
    setHeightFemale(dogObj.heightFemale)
    setWeightMale(dogObj.weightMale)
    setWeightFemale(dogObj.weightFemale)
    setLongevity(dogObj.longevity)
    setActivity(dogObj.activity)
    setGroom(dogObj.groom)
    setBark(dogObj.bark)
    setDogPic(dogObj.imgOne)
  }

  const handleOptionChange = (event) => {
    setVisibility(false)
    const selectedBreed = event.target.value;
    props.setDog(selectedBreed);
    setTimeout(() => {
      setVisibility(true);
    }, 2500);
  }
  setCurrentBreed();
  return (
    <div id='dog_selector'>
      <div id="dog_selector_visual">
      <img id="dog_image" 
          src={dogPic} 
          alt={props.dog}
        />
        <div id="breed_input_container">
          {
            visibility ?
            <form className="user_inputs" id="dog_breed">
              <select id="dog_breed_select" name="dog_breed_select" onChange={handleOptionChange}>
                <Options />
              </select>
            </form>
            :
            <div id="dog_breed_select_loading">Loading</div>
          }
        </div>
      </div>
      <GraphContainer 
        breed={props.dog}
        heightMale={heightMale}
        heightFemale={heightFemale}
        weightMale={weightMale}
        weightFemale={weightFemale}
        longevity={longevity}
        groom={groom}
        activity={activity}
        bark={bark}
      />
      <a className="move_down" href='#dog_details_top'>
        V
      </a>
    </div>
  )
}


export default DogSelector