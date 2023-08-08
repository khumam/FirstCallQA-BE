import { Router } from "express";
import HealthController from "../controllers/health.controller";
import UserController from "../controllers/user.controller";

const apiRoute = Router();
apiRoute.get('/health/checkup', HealthController.checkup);

apiRoute.get('/user', UserController.getAll);
apiRoute.get('/user/:id', UserController.getById);
export default apiRoute;