import { Request, Response } from "express";
import { Genre } from "../models/genre-models";
import genreRepository from "../repositories/genre-repository";

const getAllGenres = async (request: Request, response: Response) => {
    genreRepository.getAllGenres()
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const getGenresByID = async (request: Request, response: Response) => {
    genreRepository.getGenresByID(parseInt(request.params.id))
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const insertGenre = async (request: Request, response: Response) => {
    const genre: Genre = new Genre (request.body.id, request.body.name, request.body.about)
    genreRepository.insertGenre(genre)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const updateGenre = async (request: Request, response: Response) => {
    const genre: Genre = new Genre (parseInt(request.params.id),
                                             request.body.name,
                                             request.body.about);
    genreRepository.updateGenre(genre)
    .then(data => {
        response.send(data);
    })                      
    .catch(err => {
        response.status(500).send(err);
    })                   

}
const deleteGenre = async (request: Request, response: Response) => {
    genreRepository.deleteGenre(parseInt(request.params.id))
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}

export default { getAllGenres, getGenresByID, insertGenre, updateGenre, deleteGenre }