const router = require('express').Router();
const api = require('./api');
const Blog = require('../models/Blog');

router.use("/api", api);

router.get('/', async (req, res) => {
    const allBlogs = await Blog.findAll();
    const blogData = allBlogs.map((blog) => {
        return blog.get({ plain: true});
    })
    console.log(allBlogs);
    console.log('=================')
    console.log(blogData)

    res.render('blog', {blogData})
})





module.exports = router;