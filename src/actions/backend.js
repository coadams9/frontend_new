const API = 'http://cbaybackend.herokuapp.com'


export function getAuthToken(loginInfo) {
   // debugger
   return fetch(`${API}/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
   }).then(res => {
      debugger
      res.json()
   })
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