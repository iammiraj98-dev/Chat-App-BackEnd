import express from 'express';
import cors from 'cors';
import startServer from './startServer.mjs';
import Routes from './routes.mjs';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/route',Routes)
app.get('/home',(req,res) =>{
  res.status(200).send('<h1>Working</h1>');
})
startServer(app);

