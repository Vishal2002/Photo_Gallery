const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const photoRouter = require('./routes/route');
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/photos', photoRouter);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
