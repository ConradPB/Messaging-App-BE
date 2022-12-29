import 'dotenv/config'

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Here we go nodee uppp!');
  })

app.listen(3000, () =>
  console.log('App is hot and listening on port 3000!'),
)
