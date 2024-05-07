import User from '../models/user.models.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
export const signup = async (req , res ,next)=>{
    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
      ){
        next(errorHandler(400, 'All fields are require'));
      }
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({
        username: username,
        email,
        password:hashedPassword,
      });

     
      try{
        await newUser.save();
      res.json("Signup successful");
      }catch (error){
        next(error);

      }
    
};