const Blog = require('./models/blog');

const dbConnection = require('./db/connection');

class Repository {
    constructor() {
        dbConnection.once('open', () => {
            this.dbConnection = dbConnection;
        })
    }

    async postBlog(blogData) {
        const blog = new Blog(blogData);
        try {
            const result = blog.save();
            return result;
        } catch (err) { }
    }

    async getAllBlogs() {
        try {
            const result = await Blog.find();
            return result;
        } catch (err) { }
    }

    async getBlogById(blogId) {
        try {
            const result = await Blog.findById(blogId);
            return result;
        } catch (err) { }
    }

    async deleteBlogById(blogId) {
        try {
            const result = await Blog.findByIdAndDelete(blogId);
            return result;
        } catch (err) { }
    }

    async deleteAllBlogs() {
        try {
            const result = await Blog.deleteMany();
            return result;
        } catch (err) { }
    }

}


module.exports = Repository;