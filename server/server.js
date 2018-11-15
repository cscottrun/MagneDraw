const express = require('express')
const app = express()
const bodyParser = require("body-parser");


const port = 3000

app.use(express.static('server'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get('/', (req,res) => {
res.render('index')
})

app.post('/', function (req, res) {
  positions = req.body.positions;
  res.render('index', {positions:positions})
});






app.listen(port, () => console.log(`Carries app listening on port ${port}!`))



