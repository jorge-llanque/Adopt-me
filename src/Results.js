import Pet from './Pet'

const Results = ({ pets, animals }) => {
  return (
    <div className='search'>
      {!animals.length ? (
        <h2>No Pets Found</h2>
      ) : (
        animals.map(animal => (
          <Pet
            animal={animal.type}
            key={animal.id}
            name={animal.name}
            breed={animal.breeds.primary}
            images={animal.photos}
            location={`${animal.contact.address.city}, ${animal.contact.address.state}`}
            id={animal.id}
          />
        ))
      )}
    </div>
  )
}

export default Results
