const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');
const repo = new Repository();

router.use(express.urlencoded({ extended: true }));

router.get('/blogs/create', (req, res) => {
    res.render('create-blog', { title: 'Create a new blog' });
});

router.post('/blogs', (req, res) => {
    try {
        repo.postBlog(req.body);
    } catch (err) {
        res.status(500).send('Error posting blog');
    }
    res.redirect('/blogs');
});

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    repo.getBlogById(id)
        .then((result) => {
            console.log("OFSAIJFIOASFJAS")
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Blog not found' });
        })
});

module.exports = router;