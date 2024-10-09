const express = require('express');
const connectDB = require('./db/database');
const dotenv = require('dotenv');
const courseRoutes = require('./Routes/courseRoutes');


dotenv.config();


connectDB();

const app = express();


app.use(express.json());

// Routes
app.use('/api', courseRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
