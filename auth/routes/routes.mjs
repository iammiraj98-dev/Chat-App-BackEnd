const AuthRoute = (Router) =>{
  Router.get('/api/v1/auth/register',(req,res) =>{
    res.send(`<h1>Welcome To The Auth Routes</h1>`);
  });
}
export default AuthRoute;