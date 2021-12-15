let express = require('express')

// Import States model
let States = require('../models').States

let router = express.Router()

router.get('/states', function(req,
   res, next) {

        // Get all states from States database model
        States.findAll({ order: ['name'] })

            .then(states => { return res.json(states) })

            .catch(err => next(err))

   })

router.get('/state/:name', function(req,
    res, next) {
        let stateName = req.params.name
        States.findOne({ where: {name: stateName} } )

            .then( state => {
                // if a state is returned
                if (state) {
                    return res.json(state)
                } else {
                    return res.status(404).send('State not found')
                }
            })

            .catch(err => next(err))

    })

// route will take patch call for "state slash anything"
router.patch('/states/:name', function(req,
    res, next) {

        // store state name passed in API call in variable
        let stateName = req.params.name
        // store 'visited' boolean from payload in variable
        let stateVisited = req.body.visited

        States.update( {visited: stateVisited}, { where: {name: stateName} } )

            // Sequelize sends 'rowsUpdated' array back in response to call to update database rows
            .then(rowsUpdated => {
                // first element in array is number of rows updated
                let numberOfRowsUpdated = rowsUpdated[0]
                if (numberOfRowsUpdated == 1) {
                    return res.send('ok')  // returns 200 by default
                }
                return res.status(404).send('State not found')
            })

            // catch server errors (issues other than invalid state name)
            // pass on to generic error handler defined in server.js
            .catch( err => next(err) )

    })

module.exports = router