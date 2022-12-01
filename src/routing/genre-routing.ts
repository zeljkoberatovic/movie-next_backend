import { Router } from "express";
import genreController from "../controllers/genre-controller";

const router: Router = Router();

//router.get('/genres',genreController.getAllGenres);
//router.get('/genres/:id',genreController.getGenresByID);
//router.post('/genres/',genreController.insertGenre);
//router.put('/genres/:id',genreController.updateGenre);
//router.delete('/genres/:id',genreController.deleteGenre);


router.route('/')
.get(genreController.getAllGenres)
.post(genreController.insertGenre)

router.route('/:id')
.get(genreController.getGenresByID)
.delete(genreController.deleteGenre)
.put(genreController.updateGenre)
export default router;