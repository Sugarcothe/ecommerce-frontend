import {API} from '../config';


// SIGNUP METHOD
export const signup = (user) => {
  //  console.log(name, email, password)
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err)
  })
 }

// SIGNUP METHOD
export const signin = user => {
  //  console.log(name, email, password)
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err)
  })
 }

//  AUTHENTICATE AND REDIRECT A USER AFTER SIGN IN
 export const authenticate = (data, next) => {
   if(typeof window !== 'undefined') {
     localStorage.setItem('jwt', JSON.stringify(data))
     next()
   }
 }