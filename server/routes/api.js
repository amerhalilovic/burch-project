const express = require('express');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose');
const db = "mongodb://uservishwas:Amer1206@ds151596.mlab.com:51596/eventsdb"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error! ' + err)
    } else {
        console.log('Connected to mongoose')
    }
})

router.get('/', (req, res) => {
    res.send('From API route');
})


router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
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
                    res.status(200).send(user)
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": 1,
            "img":"https://cdn4.iconfinder.com/data/icons/good-happy-boss/401/happy-boss-008-512.png",
            "name": "Burch Party",
            "description": "Party for graduate students",
            "date": "2019-04-23"
        }, {
            "_id": 2,
            "img":"https://cdn0.iconfinder.com/data/icons/food-and-drinks-9/51/celebration2-512.png",
            "name": "IT Party",
            "description": "Party for IT students",
            "date": "2019-02-16"
        },
        {
            "_id": 3,
            "img":"https://static.thenounproject.com/png/98497-200.png",
            "name": "Proffesors Party",
            "description": "Party for our proffesors",
            "date": "2019-06-01"
        }
        // {
        //     "_id": 4,
        //     "img":"https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/flower.png",
        //     "name": "International women's day",
        //     "description": "No matter even if it takes a while,You handle every responsibility with a smile",
        //     "date": "2019-03-08"
        // }
    ]
    res.json(events)
})

router.get('/special', (req, res) => {
    let events = [
        {
            "_id": 1,
            "name": "Burch Party",
            "description": "Party for graduate students",
            "date": "2019-04-23T15:00:00.511Z"
        }, {
            "_id": 2,
            "name": "IT Party",
            "description": "Party for IT students",
            "date": "2019-02-16T12:10:00.511Z"
        },
        {
            "_id": 3,
            "name": "Proffesors Party",
            "description": "Party for our proffesors",
            "date": "2019-06-01T20:00:00.511Z"
        }
    ]
    res.json(events)
})


module.exports = router;