import React from 'react'

function Recipetile({recipe}) {
    return (
        <div className='recipeTile'>
            <img className='recipeTile_image' src={recipe["recipe"]["image"]} alt="image of available recipe" />
            <p className='recipeTile_name'>{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default Recipetile
