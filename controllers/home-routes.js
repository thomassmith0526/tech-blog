const router = require('express').Router();
const Blog = require('../models/Blog');
const Login = require('../models/login');

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll().catch((err)=> {
      res.json(err);
    });
    const blogs = blogData.map((blog) => blog.get({ plain : true }));
    res.render('all', { blogs })
})

router.get('/blog/:id', async (req, res) =>{
    try {
        const blogData = await Blog.finkByPK(req.params.id);
        if(!blogData) {
            res.status(400).json({ message: 'No blog with this id!'});
            return;            
        }
        const blog = blogData.get({ plain: true });
        res.render('blog', blog);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;