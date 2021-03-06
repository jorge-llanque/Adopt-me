import getToken from './getToken'

export default async function getAnimals(setAnimals) {
  const token = await getToken()

  return fetch('https://api.petfinder.com/v2/animals', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      setAnimals(data.animals)
    })
    .catch(e => {
      console.log(e)
    })
}
