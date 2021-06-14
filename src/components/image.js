import React from 'react'


const Image = ({image}) => {
    return (
        <div className='image'>
            <img src={image} alt="" width='150px' />
        </div>
    )
}

export default Image
