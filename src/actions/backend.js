const API = 'https://cbaybackend.herokuapp.com/'


export function getAuthToken(loginInfo) {
   return fetch(`${API}/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
   }).then(res => res.json())
}

export function newUser(username, password, phoneNum) {
   return fetch(`${API}/users`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         username: username,
         password: password,
         phoneNum: phoneNum
      }),
   }).then(res => res.json())
}