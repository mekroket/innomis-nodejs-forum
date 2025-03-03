const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then(()=>console.log("Veritabanı bağlantısı başarılı!"))
    .catch(error=>console.log(`Veritabanı bağlantısı başarısız ${error}`))