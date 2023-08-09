import { Router } from "express";
import HealthController from "../controllers/health.controller";
import UserController from "../controllers/user.controller";
import { PostValidation, UpdateValidation, UserValidation } from "../requests/user.request";

const apiRoute = Router();
apiRoute.get('/health/checkup', HealthController.checkup);

apiRoute.get('/user', UserController.getAll);
apiRoute.get('/user/:id', UserValidation, UserController.getById);
apiRoute.post('/user/store', PostValidation, UserController.store);
apiRoute.put('/user/update/:id', UpdateValidation, UserValidation, UserController.update);
apiRoute.delete('/user/delete/:id', UserValidation, UserController.delete);

export default apiRoute;