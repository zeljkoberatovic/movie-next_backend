import multer from "multer";  //treba nam multer
import path from "path";   //sve sa putanjama fajlova mozemo da rijesimo sa ugradjenom bibliotekom path
import express from "express";
import { Request, Response } from "express";
import { request } from "http";

const storage = multer.diskStorage({
    destination: (request, file, callback) =>{   // obje su funkcije koje rade sa parametrima
        callback(null, path.join(__dirname, './../../public'));
    },
    filename: (request, file, callback) =>{
        callback(null, `${Date.now()}-${file.originalname}`);  //sada smo sigurni da se naziv fajla nece podudarati
    }
})

const multerFileUpload = multer({storage});

const fileUploadRouter = express.Router();

fileUploadRouter.post('/upload', 
                     multerFileUpload.single('img'),
                    (request: Request, response: Response) => {
                         response.send({
                            filename: request.file.filename
                         })
                             })


export default fileUploadRouter;                             