import express from 'express';
import { Application } from 'express';
import { createConnection } from 'typeorm';
import dbConfig from './common/db-config';
import movieRouter from './routing/movie-routing';
import directorRouter from './routing/director-routing';
import starRouter from './routing/star-routing';
import genreRouter from './routing/genre-routing';


const app: Application = express();
app.use(express.json());

app.use(movieRouter);
app.use(directorRouter);
app.use(starRouter);
app.use(genreRouter);


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


