const express = require('express');
const mongoose = require('mongoose')
const articleRouter = require('./router/articles')
const app = express();


mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    const articles = [{
        title: 'test',
        createdAt: new Date(),
        description: 'test desc'
    }]
    res.render('articles/index', { articles: articles })
})


app.use('/articles', articleRouter)

app.listen(5000, () => {
    console.log('app is running on https://localhost/5000')
})


