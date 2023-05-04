const express = require('express');
const router = express.Router();
const Repository = require('../Repository/Repository');

const repo = new Repository();

router.delete('/blogs/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleteBlog = repo.deleteBlogById(id);
        res.send(deleteBlog);
    } catch (err) {
        res.status(500).send('Error deleting blog');
    }
});

module.exports = router;
