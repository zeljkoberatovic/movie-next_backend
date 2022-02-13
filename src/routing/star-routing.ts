import { Router } from "express";
import starController from "../controllers/star-controller";

const router: Router = Router();

router.get('/stars',starController.getAllStars);
router.get('/stars/:id',starController.getStarByID);
router.post('/stars',starController.insertStar);
router.put('/stars/:id',starController.updateStar);
router.delete('/stars/:id',starController.deleteStar);

export default router;