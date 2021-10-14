import dotenv from 'dotenv'
dotenv.config()

let key = 'v6dGEYV7M34k6hkgOYNQY0fH99YC4nNnjkNhlnB1q5AXtZGxjC'
let secret = 'cS7K5wQb2AK13u1OKeQqqE2BhB1j2XCkyJqM3uXo'
let token

console.log(key, secret)

export default function getAnimals(setAnimals) {
  return fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
  })
    .then(res => res.json())
    .then(data => {
      token = data.access_token
    })
    .then(() => {
      fetch('https://api.petfinder.com/v2/animals', {
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
    })
    .catch(e => {
      console.log(e)
    })
}
