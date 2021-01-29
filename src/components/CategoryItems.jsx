import React from 'react'
import carusel1 from '../assets/img/carusel-1.jpg'

function CategoryItems(props) {
    return (
        <div className="card hover:shadow-lg m-2 h-96 lg:h-56">
            <img className="w-full h-96 lg:h-56 object-cover" src={carusel1} alt=""/>
        </div>
    )
}

export default CategoryItems
