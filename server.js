const express = require('express')
const path = require('path')

const mailTo = require('./mail')

const app = express()
const PORT = process.env.PORT || 8080

// Set Handlebars as view engine
app.set('view engine', 'hbs')


//redirect http to https
app.use(require('express-http-to-https').redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

// Set public folder
app.use(express.static(path.join(__dirname, './public')))

// Data Parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
    if(!req.subdomains.includes('herokuapp')) {
        //redirect naked to www domain
        app.use(require('express-naked-redirect')())
    }
})

app.get('/contact', (req, res) => {
    const { name, email, subject, message, firstname }= req.query
        mailTo(name, email, subject, message, (err, data) => {
                res.send({
                    name,
                    email,
                    subject,
                    message,
                    formResponse: err
                })
        })
})

app.get('/messagesent', (req, res) => {
    res.render('messageSent')
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/sitemap', (req, res) => {
    res.contentType('application/xml')
    res.sendFile(path.join(__dirname, 'sitemap.xml'))
})

app.get('*', (req, res) => {
    res.render('my404')
})

app.listen(PORT, () => {
    console.log('Server is listening on port ', PORT)
})