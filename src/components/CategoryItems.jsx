import React from 'react'

function CategoryItems(props) {
    const {cover} = props
    return (
        <div key={props.id} className="card hover:shadow-lg m-2 h-96 lg:h-56">
            <img className="w-full h-96 lg:h-56 object-cover" src={cover} alt="img"/>
        </div>
    )
}

export default CategoryItems
