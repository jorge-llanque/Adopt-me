import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from './default.png'

// const Pet = props => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, props.name),
//     React.createElement('h3', {}, props.animal),
//     React.createElement('h3', {}, props.breed)
//   )
// }

const Pet = props => {
  const { name, animal, breed, images, location, id } = props

  let hero = defaultImage
  if (images.length) {
    hero = images[0].small
  }

  return (
    <Link to={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={hero} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  )
}

export default Pet
