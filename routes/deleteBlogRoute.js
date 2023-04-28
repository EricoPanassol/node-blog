const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');

const repo = new Repository();

router.get('/delete-blog', async (req, res) => {
    try {
        const deleteBlog = await repo.deleteBlogById('644bda04ff3a7f957c2d8c60');
        res.send(deleteBlog);
    } catch (err) {
        res.status(500).send('Error deleting blog');
    }
});

module.exports = router;
