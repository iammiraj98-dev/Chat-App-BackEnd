import requestValidate from '../../middlewear/requestValidate.mjs';
import Register from '../controller/register.mjs';
const AuthRoute = (Router) =>{
  Router.get('/api/v1/auth/register',requestValidate,Register);
}
export default AuthRoute;