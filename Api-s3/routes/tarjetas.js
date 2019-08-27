import mongojs from 'mongojs'

const db = mongojs('DatabaseS3', [
    'tarjetas'
])

module.exports = app => {
    // app.get('/tarjetas/:id', (req, res) => {
    //     db.tarjetas.find({
    //         _id: mongojs.ObjectId(req.params.id)
    //     }, (err, response) => {
    //         res.json({
    //             response: response
    //         })
    //     })
    // })

    app.get('/tarjetas', (req, res) => {
        db.tarjetas.find((err, tarjetas) => {
            res.json({
                tarjetas: tarjetas
            })
        });
    })

    app.post('/tarjetas', (req, res) => {

        let newTarjeta = req.body;

        db.tarjetas.insert(newTarjeta, (err, tarjeta) => {
            res.json({
                tarjeta: tarjeta
            })
        })
    })

    app.put('/tarjetas/:id', (req, res) => {
        let updatetarjeta = req.body
        db.tarjetas.update(
            { _id: mongojs.ObjectId(req.params.id) },
            updatetarjeta,
            {},
            (err, response) => {
                res.json({
                    response: response
                })
            }
        )
    })

    app.delete('/tarjetas/:id', (req, res) => {
        db.tarjetas.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })
}