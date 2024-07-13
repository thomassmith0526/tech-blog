const Login = require('./login')
const Blog = require('./Blog');



Login.hasMany(Blog, {
    foreginKey: 'login_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(Login, {
    foreignKey: 'login_id'
});

module.exports = {Login, Blog}