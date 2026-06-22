import User from '../models/user.mjs';
import helper from '../../middlewear/helper.mjs';
const Register = async (req,res,next) =>{
  try {
    const {body = {}} = req;
    const {Email,Name,Password} = body;
    let checkUserExit = await User.find({email:Email});
    console.log(checkUserExit);
    if(!checkUserExit.length){
      let passwordHash = await helper.getHashPassword(Password);
      const user = new User({
        email:Email,
        name :Name,
        passwordHash:passwordHash
      });
      user.save();
      console.log('User Save');
      return res.status(200).json({status:1,msg:'User Save Successfully'});
    }else{
      return res.status(200).json({status:1,msg:'User Already Exit'});
    }


  } catch (error) {
    console.error(`Something Went Wrong ${error}`);
  }
  
};

export default Register;