import React from 'react'

function Options() {
  const renderElements = () => {
    let elements = []
    if(!sessionStorage.getItem("breeds")) {
      return false;
    }
    let breedArr = sessionStorage.getItem("breeds").split(",")
    for (let i = 0; i < breedArr.length; i++) {
      elements.push(<option value={breedArr[i]} key={breedArr[i]}>{breedArr[i]}</option>)
    }
    return elements
  }
  return renderElements()
}

export default Options