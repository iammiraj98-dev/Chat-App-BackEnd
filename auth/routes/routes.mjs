import validateAuthRegisterRequest from '../../middlewear/validateAuthRegisterRequest.mjs';
import Register from '../controller/register.mjs';
const AuthRoute = (Router) =>{
  Router.get('/api/v1/auth/register',validateAuthRegisterRequest,Register);
}
export default AuthRoute;