import getToken from './getToken'

export default async function (id, setAnimal) {
  const token = await getToken()

  return fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log('data', data.animal)
      return data.animal
    })
    .catch(e => {
      console.log(e)
    })
}
