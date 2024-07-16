const router = require('express').Router();
const Blog = require('../../models/Blog');


router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll();
        res.status(200).json(allBlogs)
    } catch (err) {
        res.status(500).json(err);
    }
})



router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            blog_name: req.body.blog_name,
            content: req.body.content,
        });
        if(newBlog) {
            res.status(200).json(blogData);
        }
        
       } catch (err) {
        res.status(400).json(err)
       }
});

module.exports = router;