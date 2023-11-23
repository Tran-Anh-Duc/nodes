const express = require('express')
const app = express()
const port = 3000


// app.get('/',function(){
//     return res.send('hello world')
// });


app.get('/tin-tuc', (req, res) => {
  return res.send('Hello World!')
})


//ip local 127.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})