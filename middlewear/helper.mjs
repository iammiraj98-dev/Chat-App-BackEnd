import bcrypt from 'bcrypt';
const helper = {
  getHashPassword:async(val) => {
    let salt = await bcrypt.genSalt(16);
    return await bcrypt.hash(val,salt);
  }
};


export default helper;