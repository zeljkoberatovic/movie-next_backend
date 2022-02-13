import { Request, Response } from "express";
import { Movie } from "../models/movie-models";
import movieRepository from "../repositories/movie-repository";



const getAllMovies = async (request: Request, response: Response) => {
    movieRepository.getAllMovies()
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(400).send(err);
    })
}

const getMovieByID = async (request: Request, response: Response) => {
    movieRepository.getMovieByID(parseInt(request.params.id))
    .then(data => {
        response.send(data[0]);
    })
    .catch(err => {
        response.status(400).send(err);
    })
}

const insertMovie = async (reguest: Request, response: Response) => {
    const movie: Movie = new Movie(reguest.body.id,reguest.body.title, reguest.body.year, reguest.body.image_url,
            reguest.body.certificate, reguest.body.runtime, reguest.body.imdb_rating, reguest.body.description,
            reguest.body.metascore, reguest.body.votes, reguest.body.gross)
    movieRepository.insertMovie(movie)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })    
}

const updateMovie = async (request: Request, response: Response) => {
    const movie: Movie = new Movie(parseInt(request.params.id),
               request.body.title, request.body.year, request.body.image_url,
               request.body.certificate, request.body.runtime, request.body.imdb_rating, request.body.description,
               request.body.metascore, request.body.votes, request.body.gross );
    movieRepository.updateMovie(movie)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}

const deleteMovie = async (request: Request, response: Response) => {
    movieRepository.deleteMovie(parseInt(request.params.id))
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}


export default { getAllMovies, getMovieByID, insertMovie, updateMovie, deleteMovie };