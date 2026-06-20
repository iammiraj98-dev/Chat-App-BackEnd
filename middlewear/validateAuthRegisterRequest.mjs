const helper = {
  validateEmail :(email) =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email); // returns true
  },
  
  validatePassword :(password) =>{
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordregex.test(password); // returns true
  },
};

const validateAuthRegisterRequest = (req,res,next) => {
  const { body = {} } = req;
  let {Email="",Name="",Password=""} = body;
  if(!Email || !Name || !Password){
    if(!Email) return res.status(200).send({status:0,msg:`Email is missing`});
    if(!Name) return res.status(200).send({status:0,msg:`Name is missing`});
    if(!Password) return res.status(200).send({status:0,msg:`Password is missing`});
  }
  
  if(!helper.validateEmail(Email)){
    return res.status(200).send({status:0,msg:"Invalid Email"});
  }
  
  if(!helper.validatePassword(Password)){
    return res.status(200).send({status:0,msg:"Invalid Password"});
  }

  next();

};
export default validateAuthRegisterRequest;