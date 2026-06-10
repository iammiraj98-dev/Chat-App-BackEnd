import express from 'express';
import cors from 'cors';
import startServer from './startServer.mjs';
const app = express();
app.use(express.json());
app.use(cors());
startServer(app);