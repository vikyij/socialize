import firebase from 'firebase'

export const authmethods = {
    // firebase helper methods go here... 
    signup: (email, password, setErrors, setToken) => {
        firebase.auth().createUserWithEmailAndPassword(email,password) 
        .then(async res => {
          const token = await Object.entries(res.user)[5][1].b
          //set the token to localstorage
          await localStorage.setItem('token', token)
          //grab token from local storage and set to state. 
          setToken(window.localStorage.token)
          console.log(res)
        })
        .catch(err => {
          //saving error messages here
          setErrors(prev => ([...prev, err.message]))
          console.error(err)
        })
    },
        signin: (email, password) => {

        },
            signout: (email, password) => {

            },
}