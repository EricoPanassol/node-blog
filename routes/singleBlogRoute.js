const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');

const repo = new Repository();

router.get('/single-blog', async (req, res) => {
    try {
        const singleBlog = await repo.getBlogById('644bd343a467446a2ccb8bf2');
        res.send(singleBlog);
    } catch (err) {
        res.status(500).send('Error retrieving blog');
    }
});

module.exports = router;
