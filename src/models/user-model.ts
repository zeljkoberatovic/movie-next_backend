export class User {
    username: string;
    name: string;
    is_admin: boolean;
    hashed_password: string;
 
    constructor(username?:string, name?:string, is_admin?:boolean, hashed_password?:string){
        this.username = username;
        this.name = name;
        this.is_admin = is_admin;
        this.hashed_password = hashed_password;
    }

    fillUserDataFromDb(dbUser: IUserDbInterface){
        this.username = dbUser.user_name
        this.name = dbUser.name;
        this.is_admin = dbUser.is_admin;
        this.hashed_password = dbUser.password;
    }

    static convertDbObjectToModel = (data:IUserDbInterface) => {
        const u: User = new User();
        u.fillUserDataFromDb(data);
        return u;
    }
}

    interface IUserDbInterface{
    user_name: string;
    name: string;
    is_admin: boolean;
    password: string;
    }
    

    //public static createUserByResult(dbResult: any): User{
       // if(dbResult){
         //   let user: User = new User();
          //  user.username = dbResult.username;
           // user.name = dbResult.name;
           // user.hashedPassword = dbResult.hashed_Password;
           // user.isAdmin = dbResult.isAdmin
        //}
       // else
          // return null;
    //}

   // public static createUserListByResult(dbResult: any): User[] {
       // let users : User[] = [];
       // dbResult.forEach((res: any) =>{
           // let user = User.createUserByResult(res);
           // users.push(user);
        //})
        //return users;
        //}
    

