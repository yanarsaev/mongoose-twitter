const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/posts.route'))
app.use(require('./routes/favorites.route'))

mongoose.connect('mongodb+srv://yanarsaev:eBaRuSm4gmSKDZ2u@cluster0.2gs1s7k.mongodb.net/twitter')
.then(() => console.log('[MongoDb] - подключен'))
.catch(() => console.log('[MongoDb] - НЕ подключен'))

app.listen(3000, () => console.log('Server has been started'))