const express = require('express')
const router = express.Router()
const firebaseApp = require('../firebase/firebase')

//get a singer user data via X
router.get('/users/get', (req, res) => {
    res.status(200).send("userData").end()
})

//add a new user to the database
router.post('/users/add', async (req, res) => {
    if(Object.keys(req.body) === 0){
        res.status(400).send("na data input").end();
    }
    else{
        const password = req.body.password
        const email = req.body.email  

        const user = await firebaseApp.addUser(email, password)

        //more validations
        res.status(200).send(user).end()
    }
})

module.exports = {
    router
}