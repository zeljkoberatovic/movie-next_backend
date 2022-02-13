import { Request, Response } from "express";
import { Star } from "../models/star-models";
import starRepository from "../repositories/star-repository";

const getAllStars = async (request: Request, response: Response) => {
    starRepository.getAllStars()
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const getStarByID = async (request: Request, response: Response) => {
    starRepository.getStarByID(parseInt(request.params.id))
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const insertStar = async (request: Request, response: Response) => {
    const star: Star = new Star(request.body.id, request.body.name, request.body.about)
    starRepository.insertStar(star)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}
const updateStar = async (request: Request, response: Response) => {
    const star: Star = new Star(parseInt(request.params.id),
                                          request.body.name,
                                          request.body.about);
    starRepository.updateStar(star)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })                                      

}
const deleteStar = async (request: Request, response: Response) => {
    starRepository.deleteStar(parseInt(request.params.id))
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send(err);
    })
}

export default { getAllStars, getStarByID, insertStar, updateStar, deleteStar}