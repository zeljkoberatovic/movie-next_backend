import { Router } from "express";
import directorController from "../controllers/director-controller";

const router: Router = Router();

router.get('/directors',directorController.getAllDirectors);
router.get('/directors/:id',directorController.getDirectorByID);
router.post('/directors',directorController.insertDirector);
router.put('/directors/:id',directorController.updateDirector);
router.delete('/directors/:id',directorController.deleteDirector);

export default router;