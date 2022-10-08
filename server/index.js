const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
})

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.body);
    next()
})

app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Server Running"));
