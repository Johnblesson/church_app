const express = require('express');
const app = express();
const cors = require('cors');
const ejs = require('ejs');
const path = require('path')
require('dotenv').config();
// const bodyParser = require('body-parser')

require('./server/database/db')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

// View Engine
const templatePath = path.join(__dirname, './views');
app.set('view engine', 'ejs');
app.set('views', templatePath);

// Serve static files from the 'public' directory
app.use(express.static('public')) 

const router = require('./server/routes/route')
app.use(router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})