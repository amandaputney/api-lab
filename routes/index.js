var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')

const token = process.env.CHUCKNORRIS_RANDOMJOKE_TOKEN
const ROOT_URL = 'https://api.chucknorris.io/';
const JOKE_URL = "https://api.chucknorris.io/jokes/random"


router.get('/', function(req, res, next) {
  const joke= req.query.joke;
  res.render('index');
})


module.exports = router;

// router.get('/', async function(req, res, next) {
//   const randomJoke = req.query.randomJoke;
//   console.log(`randomjoke: ${randomJoke}`)
//   if (!randomJoke) return res.render('index', {jokeData: null});
//   // Define an object that will also come in handy later
//   const options = {
//     headers: {
//       Authorization: `token ${token}`
//     }
//   };
//   let jokeData
//   // Next line has been refactored
//   fetch(`${ROOT_URL}/jokes/${randomJoke}`, options)
//   .then(res => res.json())
//   .then(jokeData => {
//     res.render('index', { jokeData });
//   });
// });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const joke = req.query.joke;
//   // console.log(`joke: ${joke}`)
//   if (!joke) res.render('index', {jokeData: null});

//   fetch(`${ROOT_URL}/jokes/random`)
//   res.render('index');
//   // res.render('index', { title: 'Chuck Norris Joke Generator' });
// });