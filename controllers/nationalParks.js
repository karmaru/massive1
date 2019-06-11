module.exports = {
    read: (req,res) => {
        // this grabs data from the "db" established in index.js file
        let db = req.app.get('db')

        // this works because inside the db folder we have the nationalParks.db file
        db.getNationalParks().then((response) => {
            res.send(response)
        })
    },

    create: (req,res) => {
        console.log(req.body)
        let db = req.app.get('db')
        db.createNationalParks(req.body).then((response) => {
            res.send(response)
        } )
    },

    update: (req,res) => {
        let db = req.app.get('db')
        let {id} = req.params
        let park = req.body
        park.id = id
        db.updateNationalParks(park).then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        let park = req.body
        park.id = id
        db.deleteNationalParks(park).then((response) => {
            res.send(response)
        }).catch(err => res.status(500).send(err))
    }
}