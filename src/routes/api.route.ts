import { Router } from "express";
import HealthController from "../controllers/health.controller";
import UserController from "../controllers/user.controller";
import { PostValidation, UpdateValidation } from "../requests/user.request";

const apiRoute = Router();
apiRoute.get('/health/checkup', HealthController.checkup);

apiRoute.get('/user', UserController.getAll);
apiRoute.get('/user/:id', UserController.getById);
apiRoute.post('/user/store', PostValidation ,UserController.store);
apiRoute.put('/user/update/:id', UpdateValidation, UserController.update);
apiRoute.delete('/user/delete/:id', UserController.delete);

export default apiRoute;