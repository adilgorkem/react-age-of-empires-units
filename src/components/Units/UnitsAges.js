import React from 'react'
import './UnitsAges.css'

export default function UnitsAges(props) {

    const AgesFilterHandler = (event) => {
        event.preventDefault();
        props.onChangeFilter(event.target.value);
    }

    return (

        <div className='ages'>
        <select value={props.selected} onChange={AgesFilterHandler}>
          <option value='All'>All</option>
          <option value='Dark'>Dark</option>
          <option value='Feudal'>Feudal</option>
          <option value='Castle'>Castle</option>
          <option value='Imperial'>Imperial</option>
        </select>
        </div>
    )
}
