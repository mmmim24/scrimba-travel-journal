import React from 'react'
import loc from '../assets/loc.png'

const Site = ({...props}) => {
  return (
    <React.Fragment>
        <div className={props.className}>
            <img src={props.image} alt={props.place} height={200} />
            <div>
                <div className='country'>
                    <img src={loc} alt='location-icon' />
                    <h3>{props.city}</h3>
                    <a href={props.location} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.place}</h1>
                <h4>{props.date}</h4>
                <p>{props.description}</p>
            </div>
        </div>  
    </React.Fragment>
  )
}

export default Site