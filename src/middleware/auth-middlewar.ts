import  expressJwt  from 'express-jwt';


const authMiddleware = expressJwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256']

})


export default authMiddleware;