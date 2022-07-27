import React from 'react'
import "./pagination.css"
const Pagination = ({prev, next, onPrevious, onNext}) => {
    const handlePrevious = () =>{
        onPrevious();
    }
    const handleNext = () =>{
        onNext();
    }
    return (
        <nav>

            <ul className='pagination-container'>
            {
                prev? <li><button onClick={handlePrevious}>Previous</button></li> : null
            }
            {
                next?<li><button onClick={handleNext}>Next</button></li> : null
            }
            </ul>
        </nav>
    )
}

export default Pagination