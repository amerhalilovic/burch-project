const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



const mongoose = require('mongoose');
const db = "mongodb://hanomajstor:MaJsToR97@ds235437.mlab.com:35437/seproject"
const User = require('../models/user')
const Drink = require('../models/drinks')
const Food = require('../models/food')
const Event = require('../models/events')

mongoose.connect(db, {useNewUrlParser: true}, err => {
  if (err) {
    console.error('Error! ' + err)
  } else {
    console.log('Connected to mongoose')
  }
})


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}

router.get('/', (req, res) => {
  res.send('From API route');
})

router.get('/drinks', verifyToken, (req, res) => {
  Drink.find({}, function(err, drinks){
    res.json(drinks);
  })
})

router.get('/foods', verifyToken, (req, res) => {
  Food.find({}, function(err, food){
    res.json(food);
  })
})

router.get('/events', (req, res) => {
  Event.find({}, function(err, events){
    res.json(events);
  })
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    } else {
      let payload = { subject: registeredUser._id }
      let token = jwt.sign(payload, 'secretKey')

      res.status(200).send({ token })
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password')
        } else {
          let payload = { subject: user._id }
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({ token })
        }
      }
    }
  })
})

module.exports = router;