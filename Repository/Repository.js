const mongoose = require('mongoose');
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
            const result = await blog.save();
            return result;
        } catch (err) { }
    }

    async getAllBlogs() {
        try {
            const result = Blog.find();
            return result;
        } catch (err) { }
    }

    async getBlogById(blogId) {
        try {
            const result = Blog.findById(blogId);
            return result;
        } catch (err) { }
    }

    async deleteBlogById(blogId) {
        try {
            const result = Blog.findByIdAndDelete(blogId);
            return result;
        } catch (err) { }
    }

    async deleteAllBlogs() {
        try {
            const result = Blog.deleteMany();
            return result;
        } catch (err) { }
    }

}


module.exports = Repository;