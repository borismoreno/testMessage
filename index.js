const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: true }));
app.use('/mensaje', require('./routes/mensaje'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});