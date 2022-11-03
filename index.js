/** @format */

const express = require('express');
const blogRouter = require('./routes/BlogRoutes');
require('./db.config');

const app = express();

//middleware
app.use(express.json());

app.use('/api/blogs', blogRouter);

const PORT = 3001;

const log = () => console.log(`Server is running on port ${PORT}`);

app.listen(PORT, log);
