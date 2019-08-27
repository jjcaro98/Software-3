import mongojs from 'mongojs'

const db = mongojs('DatabaseS3', [
    'deudas'
])
//, 'tipoDeuda', 'cuota', 'fechaPagos'
module.exports = app => {

    app.get('/deudas/:entidad', function (req, res) {
        let entidad = req.params.entidad
        console.log("entidad", entidad);
        if (entidad) {
            // let myDeuda = db.deudas.filter(element => element.entidad.includes(entidad))
            // console.log("deudas", db.deudas);
            db.deudas.find((err, deudas) => {
                // res.json({
                //     deudas: deudas
                // })
                console.log(deudas);
                let response = deudas.filter(element => element.entidad.includes(entidad))
                res.json({
                    deudas: response
                })
            });
            // deudas =  deudas.filter(element=>{element.entidad.includes(entidad)})
            // res.send(deudas)
        } else {
            res.send(entidad)
        }
    })

    

    app.get('/deudas', (req, res) => {
        db.deudas.find((err, deudas) => {
            res.json({
                deudas: deudas
            })
        });
    })



    app.post('/deudas', (req, res) => {

        let newDeuda = req.body;

        db.deudas.insert(newDeuda, (err, deuda) => {
            res.json({
                deuda: deuda
            })
        })
    })

    app.put('/deudas/:id', (req, res) => {
        let updateDeuda = req.body
        db.deudas.update(
            { _id: mongojs.ObjectId(req.params.id) },
            updateDeuda,
            {},
            (err, response) => {
                res.json({
                    response: response
                })
            }
        )
    })

    app.delete('/deudas/:id', (req, res) => {
        db.deudas.remove({
            _id: mongojs.ObjectId(req.params.id)
        }, (err, response) => {
            res.json({
                response: response
            })
        })
    })
}