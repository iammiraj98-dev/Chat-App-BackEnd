import express from 'express';
import cors from 'cors';
import startServer from './startServer.mjs';
import Router from './routes.mjs';
const app = express();
app.use(express.json());
app.use(cors());
app.use(Router);
startServer(app);

