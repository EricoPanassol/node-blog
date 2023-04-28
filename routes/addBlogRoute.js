const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');

const repo = new Repository();

let blog = {
    title: 'Fullstack',
    snippet: 'How to build a fullstack application',
    body: 'Lorem ipsum dolor sit amet consectetur'
};

repo.postBlog(blog);

router.get('/new-blog', (req, res) => {
    try{
        res.send(blog);
    } catch {
        res.status(500).send('Error posting blog');
    }
});

module.exports = router;