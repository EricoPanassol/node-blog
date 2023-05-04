const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');

const repo = new Repository();

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    repo.getBlogById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Blog not found' });
        })
});

module.exports = router;
