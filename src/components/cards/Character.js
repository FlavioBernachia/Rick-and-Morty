import React from 'react'
import './character.css'

const Character = ({character}) => {
    return (
        <div className='cards-container'>
        {character.map((item,index) => {
            return( 
                <div className='card'  key={index}>
                    <div className='img-card'>
                        <img src={item.image} alt='character'></img>
                    </div>
                    <div className='datos-card'>
                    <h1>{item.name}</h1>
                    <div className='status-character'>
                    <span className={item.status}><i className='fa fa-solid fa-circle'></i></span>
                    <p>{item.status}</p>
                    <p>{item.species}</p>
                    </div>
                    <p>{item.type? item.type : "No es de ningun tipo"}</p>
                    <p>{item.origin.name}</p>
                    <p>{item.location.name}</p>
                    </div>
                </div>
        )})
        }
        </div>
    )
}

export default Character