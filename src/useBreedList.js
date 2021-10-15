import { useState, useEffect } from 'react'
import generateToken from './services/getToken'

const localCache = {}

export default function useBreedLIst(animal) {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')
  useEffect(() => {
    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreedList()
    }
    async function requestBreedList() {
      setBreedList([])
      setStatus('loading')
      const token = await generateToken()
      const res = await fetch(
        //`https://pets-v2.dev-apis.com/breeds?animal=${animal}`
        `https://api.petfinder.com/v2/types/${animal}/breeds`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const json = await res.json()
      console.log('sss', json)
      localCache[animal] = json.breeds || []
      setBreedList(localCache[animal])
      setStatus('loaded')
    }
  }, [animal])

  return [breedList, status]
}
