import  express from 'express';
import { Application } from 'express';
import { createConnection } from 'typeorm';

import cors, { CorsOptions } from 'cors';
import dbConfig from './common/db-config';
//import routera
import movieRouter from './routing/movie-routing';
import directorRouter from './routing/director-routing';
import starRouter from './routing/star-routing';
import genreRouter from './routing/genre-routing';
import userRouter from './routing/user-routing';


//file- upload
import fileUploadRouter from './common/file-upload';
import path from 'path';
//import midllewar
import authMiddleware from './middleware/auth-middlewar';

const app: Application = express();
app.use(express.json());

const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(authMiddleware,movieRouter);
app.use(directorRouter);
app.use(starRouter);
app.use(genreRouter);
app.use(userRouter);


app.use(fileUploadRouter);
app.use(express.static(path.join(__dirname, './../public')));


createConnection(dbConfig)
.then(conection => {
    console.log('Conection to DB');
})
.catch(err => {
    console.log('Error while connecting to DB');
    console.log(err);
})


app.listen(3000, () =>{
    console.log('Server is listening at port 3000');
})


