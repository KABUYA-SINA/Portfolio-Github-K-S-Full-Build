const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const helmet = require("helmet")
const path = require('path')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')
const rateLimit = require('express-rate-limit')


//ROUTES
const RoutesDemand = require('./routes/routes')
const RoutesSkills = require('./routes/routesSkills')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

// CORS - Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
})

//refresh Limite
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: "Too many requests have been sent please try again later.",
})


//Enregistrement routes 
app.use(xss())
app.use(mongoSanitize({allowDots: true, replaceWith: '_',}))
app.use(limiter)
app.use('/api/projet', RoutesDemand)
app.use('/api/skills', RoutesSkills)
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))


module.exports = app;
