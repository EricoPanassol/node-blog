const express = require('express') // api building
const logger = require('morgan'); // 3d-party middleware (logger)
const fs = require('fs'); // file system functions
const swaggerUi = require('swagger-ui-express'); // swagger documentation

const indexRoute = require('./routes/indexRoute');
const aboutRoute = require('./routes/aboutRoute');
const newBlogRoute = require('./routes/newBlogRoute');
const notFoundRoute = require('./routes/notFoundRoute');
const getAllBlogsRoute = require('./routes/getAllBlogsRoute');
const singleBlogRoute = require('./routes/singleBlogRoute');
const deleteBlogRoute = require('./routes/deleteBlogRoute');

const swaggerJson = './swagger.json';
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerJson, 'utf8'));

const app = express();


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.listen(3000, () => {
    console.log('Server running on port 3000')
});


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(logger('dev'));

app.use(indexRoute);
app.use(aboutRoute);
app.use(newBlogRoute);
app.use(getAllBlogsRoute);
app.use(singleBlogRoute);
// app.use(deleteBlogRoute);
app.use(notFoundRoute);


