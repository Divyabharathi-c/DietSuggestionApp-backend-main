import express from 'express';
import cors from 'cors';

// import userRouter from './routes/User.js';

import connectToDb from './db-utils/mongoos-connect.js';
import  { Auth } from './routes/app-users.js';
import  { diet } from './routes/Diat.js';

const app = express();
app.use(cors({ origin: '*' }));
const PORT =process.env.PORT || 1200;
await connectToDb();
app.use(express.json());
app.use('/api/auth',Auth);
app.use('/api',diet);



app.listen(PORT, () => {
    console.log('started',PORT);
});