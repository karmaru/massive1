// this is the server side version of import
const express = require('express')
// this allows connection to database
const massive = require('massive')


// allows the use of .env
require('dotenv').config()

const NPC = require('./controllers/nationalParks')

// invokes express
const app = express()

app.use(express.json())

let {SERVER_PORT, CONNECTION_STRING} = process.env

// this connects to the db with a Promise...
massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    // console.log(1111, db)
    app.set('db', db)
})

app.get('/api/national_parks', NPC.read)
app.post('/api/national_parks', NPC.create)
app.put('/api/national_parks/:id', NPC.update)
app.delete('/api/national_parks/:id', NPC.delete)

app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))