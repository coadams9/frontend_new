const API = 'http://localhost:3000'


export function getAuthToken(loginInfo) {
   return fetch(`${API}/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
   }).then(res => res.json())
}