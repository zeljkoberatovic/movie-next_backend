import { Router } from "express";
import movieController from "../controllers/movie-controller";

const router: Router = Router();

//router.get('/movies', movieController.getAllMovies);
//router.get('/movies/:id', movieController.getMovieByID);
//router.post('/movies', movieController.insertMovie);
//router.put('/movies/:id', movieController.updateMovie);
//router.delete('/movies/:id', movieController.deleteMovie);



router.route('/')
.get(movieController.getAllMovies)
.post(movieController.insertMovie)

router.route('/:id')
.get(movieController.getMovieByID)
.delete(movieController.deleteMovie)
.put(movieController.updateMovie)


export default router;