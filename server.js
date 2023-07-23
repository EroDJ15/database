require('dotenv').config()

const app = require('./app')
const { db } = require('./database/config');


db.authenticate()
    .then(() => console.log('Database conectada'))
    .catch((err) => console.log(err))

db.sync() .then(() => console.log('Tablas sincronizadas'))
    .catch((err) => console.log(err))

const port = process.env.PORT || 3000

app.listen(port, () => {

    console.log(` running on port ${port}`)
})



