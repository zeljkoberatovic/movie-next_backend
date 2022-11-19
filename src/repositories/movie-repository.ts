import { getManager } from "typeorm";
import { Movie } from "../models/movie-model";
  

const getAllMovies = () => {
    return getManager().query('select * from movie');
}

const getMovieByID = (id: number) => {
    return getManager().query(`select * from movie where id = ?`, [id]);
}

const insertMovie = (movie: Movie) => {
    return getManager().query(`insert into movie(title,year,image_url, certificate,runtime,imdb_rating,
                                                  description,metascore,votes,gross)
                                values (?,?,?,?,?,?,?,?,?,?)`,
                                [movie.title, movie.year, movie.image_url, movie.certificate,movie.runtime,
                                movie.imdb_rating, movie.description, movie.metascore,movie.votes, movie.gross]);
}

const updateMovie = (movie: Movie) => {
    return getManager().query(`update movie set title = ?, year = ?, image_url = ?, certificate = ?,
                                                 runtime = ?, imdb_rating = ?, description = ?, metascore = ?,
                                                 votes = ?, gross = ?   where id = ?`,
                            [movie.title, movie.year, movie.image_url, movie.certificate,
                            movie.runtime, movie.imdb_rating, movie.description, movie.metascore,
                        movie.votes, movie.gross, movie.id]);
}

const deleteMovie = (id: number) => {
    return getManager().query(`delete from movie where id = ?`,[id]);
}


export default { getAllMovies, getMovieByID, insertMovie, updateMovie, deleteMovie }