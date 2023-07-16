const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL,
            {

                useUnifiedTopology: false,
                useNewUrlParser: true,
            });
        console.log(`DB connected successfully. ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`error while connecting to db `);
    }
};

module.exports = dbConnect;