require('dotenv').config()

let key = process.env.PETFINDER_API_KEY
let secret = process.env.PETFINDER_SECRET_KEY

export default function generateToken() {
  return fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
  })
    .then(res => res.json())
    .then(data => {
      return data.access_token
    })
}
