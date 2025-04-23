require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  let dateTime = new Date()
  let date = dateTime.toLocaleDateString()
  let time = dateTime.toLocaleTimeString()
  res.send(`The current date is ${date} and the current time is ${time}`)

})

app.post('/api/data', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Hello  ${name}, your age is : ${age}`);
  
})

app.listen(port, () => {
  console.log(`Server is running on localhost ${port}`)
})