import { Router } from "express";
import HealthController from "../controllers/health.controller";
import UserController from "../controllers/user.controller";

const apiRoute = Router();
apiRoute.get('/health/checkup', HealthController.checkup);

apiRoute.get('/user', UserController.getAll);
apiRoute.get('/user/:id', UserController.getById);
apiRoute.post('/user/store', UserController.store);
apiRoute.put('/user/update/:id', UserController.update);
apiRoute.delete('/user/delete/:id', UserController.delete);

export default apiRoute;