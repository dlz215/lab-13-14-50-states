let express = require('express')

// Import Router object with API request routes
let states_api = require('./routes/states')

let path = require('path')

// Initialize express object
let app = express()

let vueAppPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(vueAppPath))

// express.json(): Express method, allows server to parse incoming requests with JSON payloads, convert JSON to js objects.
app.use(express.json())

// Mounts specified functions at specified path. Any requests starting with '/api' passed to states_api Router object
app.use('/api', states_api)

// Error handling for invalid requests
app.use(function(req,
   res, next) {
        res.status(404) .send('Not found')
   })

// Handling for server errors
app.use(function(err,
    req, res, next) {
        res.status(500).send('Server error')
    })

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port', server.address().port)
})