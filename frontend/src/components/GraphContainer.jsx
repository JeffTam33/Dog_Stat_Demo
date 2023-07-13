import React from 'react'
import Graph from '../components/Graph'
import '../styles/GraphContainer.css'

function GraphContainer(props) {
  return (
    <div id="graph_container">
      <h1 id="breed_heading">{props.breed}</h1>
      <p id="breed_body_paragraph">Measured by rating of 1-5</p>
      <Graph 
        heightMale={props.heightMale}
        heightFemale={props.heightFemale}
        weightMale={props.weightMale}
        weightFemale={props.weightFemale}
        longevity={props.longevity}
        groom={props.groom}
        activity={props.activity}
        bark={props.bark}
      />
    </div>
  )
}

export default GraphContainer