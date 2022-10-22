import React from 'react'
import './UnitsList.css'

const UnitsList = (props) => {

  const handleClick = () => {
    props.handleClick(props.id)
  }
  return (
    <tbody className='tbody'>
      <tr onClick={handleClick}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.age}</td>
        {props.cost && <td>{Object.keys(props.cost).map(key => `${key}: ${props.cost[key]} `)}</td>}
      </tr>
    </tbody>
  );
};

export default UnitsList;
