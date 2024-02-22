// server configs and set up
import express from 'express';
import apiRouter from './apiRouter.js';
import cors from 'cors';

// App Router
const router = express.Router();

// app will be using express servers
const app = express();

// Middleware
app.use(cors());

// Database Connection

// App routes
// Home page
app.use('/', router);

// Other api routes for requesting services. Can add more different routes if needed.
app.use('/api', apiRouter);

// Start server PORT here
const PORT = process.env.PORT || 5001;

// App server will listen to port 5001
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));