import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../styles/Graph.css'

let longevityRange = [8, 10, 13, 14];
let heightRange = [8, 13, 19, 24.5];
let weightRange = [30, 40, 50, 60];

function Graph(props) {

  function getAverage (range) {
    if (range.match(/-/gm)) {
      return ((parseInt(range.split("-")[1])) + (parseInt(range.split("-")[0]))) / 2;
    } else {
      return parseInt(range[0]);
    }
  }

  function getLevel (average, ranges) {
    if (Math.min(...ranges) > average) {
      return 1;
    }

    if (Math.max(...ranges) < average) {
      return 5;
    }

    for (let i = 0; i < ranges.length; i++) {
      if (average <= ranges[i]) {
        return i + 1;
      }
    }
  }

  let longevityAverage = getAverage((props.longevity).split(" ")[0]);
  let heightMaleAverage = getAverage((props.heightMale).split(" ")[0]);
  let heightFemaleAverage = getAverage((props.heightFemale).split(" ")[0]);
  let weightMaleAverage = getAverage((props.weightMale).split(" ")[0]);
  let weightFemaleAverage = getAverage((props.weightFemale).split(" ")[0]);

  let longevityLevel = getLevel(longevityAverage, longevityRange);
  let weightMaleLevel = getLevel(weightMaleAverage, weightRange);
  let weightFemaleLevel = getLevel(weightFemaleAverage, weightRange);
  let heightMaleLevel = getLevel(heightMaleAverage, heightRange);
  let heightFemaleLevel = getLevel(heightFemaleAverage, heightRange);

  const data = [
    {
      subject: 'Longevity',
      A: longevityLevel,
      B: longevityLevel ,
      fullMark: 5,
    },
    {
      subject: 'Height',
      A: heightMaleLevel,
      B: heightFemaleLevel,
      fullMark: 5,
    },
    {
      subject: 'Weight',
      A: weightMaleLevel,
      B: weightFemaleLevel,
      fullMark: 5,
    },
    {
      subject: 'Bark',
      A: props.bark,
      B: props.bark,
      fullMark: 5,
    },
    {
      subject: 'Groom',
      A: props.groom + 1,
      B: props.groom,
      fullMark: 5,
    },
    {
      subject: 'Active',
      A: props.activity + 1,
      B: props.activity,
      fullMark: 5,
    },
  ];
  
  return (
    <div id="graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar name="Male" dataKey="A" stroke="#3381ff" fill="#3381ff" fillOpacity={0.2} />
          <Radar name="Female" dataKey="B" stroke="#ffa1a1" fill="#ffa1a1" fillOpacity={0.2} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph