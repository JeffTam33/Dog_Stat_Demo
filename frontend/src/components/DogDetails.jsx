import React, { useState } from 'react'
import '../styles/DogDetails.css'

let groomText = [
  "seasonally",
  "monthly",
  "biweekly",
  "weekly",
  "daily"
];

let activeText = [
  "Very high energy",
  "Working dog",
  "Normally active",
  "A bit of a sloth",
  "Very lazy"
]

let barkText = [
  "Extremely barky",
  "Very barky",
  "Normally barky",
  "Soft",
  "Queit"
]

function DogDetails(props) {

  const [heightMale, setHeightMale] = useState("23-24 in (58-61 cm)");
  const [heightFemale, setHeightFemale] = useState("22-23 in (56-58 cm)");
  const [weightMale, setWeightMale] = useState("40-50 lb (18-23 kg)");
  const [weightFemale, setWeightFemale] = useState("35-40 lb (16-18 kg)");
  const [longevity, setLongevity] = useState("10-12 yrs");
  const [groom, setGroom] = useState(3);
  const [activity, setActivity] = useState(3);
  const [bark, setBark] = useState(3);
  const [dogPic, setDogPic] = useState("https://cdn.midjourney.com/67878c3c-469a-499b-8120-ad030b913a27/0_3.png")

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
    setDogPic(dogObj.imgTwo)
  } 

  setCurrentBreed()

  return (
    <div className="dog_details_container">
      <img className="dog_image" src={dogPic} alt={props.dog}/>
      <div className="dog_details_info">
        <h2 id="breed_heading">{props.dog}</h2>
        <ul className="dog_details_info_container">
          <li className="detail_texts">Longevity: {longevity}</li>
          <li className="detail_texts">Height Male: {heightMale}</li>
          <li className="detail_texts">Weight Male: {weightMale}</li>
          <li className="detail_texts">Height Female: {heightFemale}</li>
          <li className="detail_texts">Weight Female: {weightFemale}</li>
          <li className="detail_texts">Groom Care: Needs to be groomed {groomText[groom - 1]}</li>
          <li className="detail_texts">Activte: {activeText[activity - 1]}</li>
          <li className="detail_texts">Barkness: {barkText[bark - 1]}</li>
        </ul>
      </div>

      <a className="move_up" href='#dog_selector_top'>
        ^
      </a>
    </div>
  )
}

export default DogDetails