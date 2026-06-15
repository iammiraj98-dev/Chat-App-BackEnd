import express from 'express';
const Route = express.Router();
Route.get('/get',(req,res) =>{
  res.send(`<h1>Welcome To The Routes</h1>`);
});
export default Route;
