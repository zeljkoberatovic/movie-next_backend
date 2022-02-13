import { Router } from "express";
import movieController from "../controllers/movie-controller";

const router: Router = Router();

router.get('/movies', movieController.getAllMovies);
router.get('/movies/:id', movieController.getMovieByID);
router.post('/movies', movieController.insertMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);


export default router;