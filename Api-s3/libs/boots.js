module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`serve on port ${app.get('port')}`);

    })
}