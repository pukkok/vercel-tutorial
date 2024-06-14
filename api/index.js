const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('express on vercel')
})

app.listen(3001, ()=> {
    console.log('서버 접속 3000번')
})

module.exports = app
