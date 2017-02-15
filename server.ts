
import express = require('express')

var app = express();
import authRoutes from './routes/authRoutes'
app.use('/api/auth', authRoutes){

app.get('/test', function (req, res){
    res.send('test successfully called')
})

app.post('/api/signup')

export default app;
