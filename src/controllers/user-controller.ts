import { Request, Response } from "express";
import { User } from "../models/user-model";
import userRepository from "../repositories/user-repository";
import crypto from 'crypto';//za kriptografiju (sifriranje), md5
import jwt from "jsonwebtoken";


const register = async(request: Request, response: Response) => {
  const hashed_Password = crypto.createHash('md5').update(request.body.password).digest('hex');
  const user: User = new User(request.body.username, request.body.name, false, hashed_Password);
  userRepository.insertUser(user)
  .then(data => {
    if(data.affectedRows == 1){
    const token = jwt.sign({
      username: user.username,
      isadmin:false,
   }, 'SECRET');
   response.send({success: true, token});
  }
  else{
    response.send({success: false});
  }
})
  .catch(err => {
    response.status(500).send(err);
  }) 
};

const login = async( request: Request, response: Response) => {
  const username = request.body.username;
  userRepository.getUserByUsername(username)
  .then(data => {
    if(data.length == 1){
      const user: User = User.convertDbObjectToModel(data[0]);
      const hashed_password = crypto.createHash('md5').update(request.body.password).digest('hex')
    if(user.hashed_password == hashed_password){
        const token = jwt.sign({
          username:user.username,
          isadmin:user.is_admin,
        },'SECRET')
        response.send({success: true, token});
        }
      else{
        response.send({success: false});
        }
      }
      else{
      response.send({success: false});
    }
  })
  .catch(err => {
    response.status(500).send(err);
  })
}
  
export default { register, login }

