const router = require('express').Router();
const Blog = require('../../models/Blog');

router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            blog_name: req.body.blog_name,
            content: req.body.content,
        });
        res.status(200).json(blogData);
       } catch (err) {
        res.status(400).json(err)
       }
});

module.exports = router;