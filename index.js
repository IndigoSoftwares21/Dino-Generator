if(process.env.NODE_ENV !== 'production')
{
  require('dotenv').config()
}
const { response } = require('express');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;



app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

const apikey = process.env.API_KEY;


// app.get('/dinoname', async(req,res)=>{
//   //run code
//   // Using Fetch API
// fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1')
// .then(response => res.send(response.json()))
// .then(data => res.send(data))
// .catch(err => console.error('Where did all the dinosaurs go?'))
// });



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':apikey,
		'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
	}
};



app.get('/dino', (req, res) => {
  fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1')
  .then(res => res.json())
  .then((json) => {
      // do something with JSON
      res.send(json)
  });
})

app.get('/dinoimage',(req,res)=>{
  fetch('https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20', options)
	.then(res => res.json())
	.then((json) => res.send(json))
	.catch(err => console.error(err));
});