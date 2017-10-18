const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send({
    components: [
      'ComponentOne',
      'ComponentTwo',
      'ComponentThree'
    ]
  })
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})