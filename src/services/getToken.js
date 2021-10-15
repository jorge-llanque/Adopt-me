let key = 'v6dGEYV7M34k6hkgOYNQY0fH99YC4nNnjkNhlnB1q5AXtZGxjC'
let secret = 'cS7K5wQb2AK13u1OKeQqqE2BhB1j2XCkyJqM3uXo'

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
