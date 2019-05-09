const express = require('express');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose');
const db = "mongodb://uservishwas:Amer1206@ds151596.mlab.com:51596/eventsdb"
const jwt = require('jsonwebtoken');
mongoose.connect(db, err => {
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
  drinks = [{
    img: "https://5.imimg.com/data5/GD/GM/MY-764091/ice-tea-500x500.png",
    name: "Ice Tea",
    price: 2

  },
  {
    img: "https://cdn0.woolworths.media/content/wowproductimages/large/032731.jpg",
    name: "Coca Cola",
    price: 2.5
  },
  {
    img: "https://cdn0.woolworths.media/content/wowproductimages/large/327603.jpg",
    name: "Red Bull",
    price: 5
  }, {
    img: "https://i5.walmartimages.com/asr/b89431c1-42ec-4ce6-bb51-00e62dd500e3_1.6ec456d453f796967c6de0d08659ff8a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
    name: "Cockta standard",
    price: 2.5

  },
  {
    img: "https://www.bionatura.hr/wp-content/uploads/2019/04/10015917_cockta-free-15l.jpg",
    name: "Cockta sugar free",
    price: 3
  },
  {
    img: "https://www.britishcornershop.co.uk/img/large/SGN0316.jpg",
    name: "Fanta",
    price: 2.5
  }, {
    img: "https://secure.ce-tescoassets.com/assets/CZ/350/5449000136350/ShotType1_540x540.jpg",
    name: "Cappy 100% orange",
    price: 3

  },
  {
    img: "https://ro.coca-colahellenic.com/media/2602/cappy-pulpy-orange-330.jpg?anchor=center&mode=crop&quality=80&width=600&height=338&rnd=131481487110000000",
    name: "Cappy Puply",
    price: 3
  }
  ]
  res.json(drinks)
})

router.get('/foods', verifyToken, (req, res) => {
  foods = [{
    img: "https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2.jpg",
    name: "Hamburger",
    price: 5

  },
  {
    img: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2018/03/55cd28cae8ee78fe1e52ab1adc9eafff24c9af92.jpeg",
    name: "Pizza",
    price: 12
  },
  {
    img: "https://killabrewsaloon.com/wp-content/uploads/2015/03/salad.jpg",
    name: "Salad",
    price: 3
  },
  {
    img: "https://www.tastefullysimple.com/_/media/ss17/blog-recipes/grilled-chicken-veggie-salad.jpg",
    name: "Chicken salad",
    price: 8

  },
  {
    img: "https://www.chicken.ca/assets/RecipePhotos/_resampled/FillWyI3MjAiLCI2MDAiXQ/Moist-Chicken-Burgers.jpg",
    name: "Chicken hamburger",
    price: 7
  },
  {
    img: "http://www.ndtv.com/cooks/images/pasta.in.cheese.sauce%20%281%29.jpg",
    name: "Pasta with cheese",
    price: 5

  },
  {
    img: "https://www.recipetineats.com/wp-content/uploads/2016/10/Mushroom-Pasta-5.jpg",
    name: "Pasta with mushrooms",
    price: 7
  },
  {
    img: "https://bellyfull.net/wp-content/uploads/2015/01/Nutella-Stuffed-Pancake-Rolls-vertical-blog.jpg",
    name: "Pancakes with nutella",
    price: 6.5
  }
  ]
  res.json(foods)
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

router.get('/events', (req, res) => {
  let events = [
    {
      "_id": 1,
      "img": "https://cdn4.iconfinder.com/data/icons/good-happy-boss/401/happy-boss-008-512.png",
      "name": "Burch Party",
      "description": "Party for graduate students",
      "date": "2019-04-23"
    }, {
      "_id": 2,
      "img": "https://cdn0.iconfinder.com/data/icons/food-and-drinks-9/51/celebration2-512.png",
      "name": "IT Party",
      "description": "Party for IT students",
      "date": "2019-02-16"
    },
    {
      "_id": 3,
      "img": "https://static.thenounproject.com/png/98497-200.png",
      "name": "Proffesors Party",
      "description": "Party for our proffesors",
      "date": "2019-06-01"
    }
  ]
  res.json(events)
})




module.exports = router;