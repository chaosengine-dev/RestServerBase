const mongoose = require('mongoose');

const dbconnect = async () => {

    try {
        await mongoose.connect( process.env.MONGODB_CON, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('Base de datos online');
        
    } catch (error) {
        console.log(error)
        throw new Error("Error en la base de datos");
    }

};


module.exports = {
    dbconnect
}