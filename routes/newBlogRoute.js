const express = require('express');
const router = express.Router();

router.get('/blogs/create', (req, res) => {
    res.render('create-blog', { title: 'Create a new blog' });
});

module.exports = router;