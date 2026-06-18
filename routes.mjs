import express from 'express';
import AuthRoute from './auth/routes/routes.mjs';
const Router = express.Router();
AuthRoute(Router);
export default Router;

