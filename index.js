const express = require('express');
const app = express();
require('./models/dbConfig')
const transfertRoutes = require('./routes/transfertControllers');

app.use('/', transfertRoutes);

app.listen(5500, () => console.log('Server started : 5500'));