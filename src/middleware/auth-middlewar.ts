import  expressJwt  from 'express-jwt';


const authMiddleware = expressJwt({
    secret: 'SECRET',
    userProperty: 'body.userData',
    algorithms: ['HS256'],
    credentialsRequired: false,
    getToken: function fromHeaderOrQuerystring(req) {
      if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    },
  })




export default authMiddleware;