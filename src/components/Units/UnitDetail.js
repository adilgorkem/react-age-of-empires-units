import React from 'react'
import "./UnitDetail.css"

export default function UnitDetail({ properties }) {
  console.log(properties[0].id);
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className='div-ud'>
        <h2 className='h2-ud'>Unit Details</h2>
        <ul>
          <li><b>ID:</b> {properties[0].id}</li>
          <li><b>Name:</b> {properties[0].name}</li>
          <li><b>Description:</b> {properties[0].description}</li>
          <li><b>Min Req. Age:</b> {properties[0].age}</li>
          <li><b>Wood Cost:</b> {properties[0].cost.Wood}</li>
          <li><b>Food Cost:</b> {properties[0].cost.Food}</li>
          <li><b>Gold Cost:</b> {properties[0].cost.Gold}</li>
          <li><b>Build Time:</b> {properties[0].build_time}</li>
          <li><b>Reload Time:</b> {properties[0].reload_time}</li>
          <li><b>Hit Points:</b> {properties[0].hit_points}</li>
          <li><b>Attack:</b> {properties[0].attack}</li>
          <li><b>Accuracy:</b> {properties[0].accuracy}</li>
        </ul>
      </div>
    </div>
  )
}
