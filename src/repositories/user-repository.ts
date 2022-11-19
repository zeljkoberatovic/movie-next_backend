import { getManager } from "typeorm";
import { User } from "../models/user-model";


const insertUser = (user: User) => {
    return getManager().query(`INSERT INTO user (user_name, name, is_admin, password)
                                VALUES (?,?,0,?)`, [user.username, user.name, user.hashed_password]);

}

const getUserByUsername = (username: string) => {
    return getManager().query(`SELECT * FROM user WHERE user_name = ?`, [ username]);

}

export default { insertUser, getUserByUsername }