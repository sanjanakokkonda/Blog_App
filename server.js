const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const dbConnect = require('./config/connectDb');
const path = require('path');

//env config
dotenv.config();

//route import
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

dbConnect();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//static routes
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Node server listening in ${process.env.DEV_MODE} mode on ${PORT} `.bgCyan.white);
});