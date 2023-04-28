const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');

const repo = new Repository();

router.get('/blogs', async (req, res) => {
    try {
        const allBlogs = await repo.getAllBlogs();
        res.render('index', { title: 'Blogs', blogs: allBlogs });
    } catch (err) {
        res.status(500).send('Error retrieving blogs');
    }
});

module.exports = router;
