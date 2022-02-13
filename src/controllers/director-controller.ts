import { Request, Response } from "express";
import { Director } from "../models/director-models";
import directorRepository from "../repositories/director-repository";

const getAllDirectors = async(request: Request,response: Response) =>{
    directorRepository.getAllDirectors()
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}

const getDirectorByID = async(request: Request, response: Response) => {
    directorRepository.getDirectorByID(parseInt(request.params.id))
    .then(data => {
        response.send(data[0]);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}

const insertDirector = async(request: Request, response: Response) => {
    const director: Director = new Director(request.body.id, request.body.name, request.body.about)
    directorRepository.insertDirector(director)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
} 

const updateDirector = async(request: Request, response: Response) => {
    const director: Director = new Director(parseInt(request.params.id),
                                                     request.body.name,
                                                     request.body.about);
    directorRepository.updateDirector(director)
    .then(data => {
        response.send(data);
    })          
    .catch(err => {
        response.status(500).send(err);
    })                                       
}

const deleteDirector = async(request: Request, response: Response) => {
    directorRepository.deleteDirector(parseInt(request.params.id))
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}

export default { getAllDirectors, getDirectorByID, insertDirector, updateDirector, deleteDirector }