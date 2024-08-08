import express from 'express';
import cors from 'cors';

import { getJobs, getJobById } from './src/controllers/jobs.controller.js';

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get('/getJobs', getJobs);
app.get('/getJobById/:id', getJobById);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
