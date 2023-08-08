import { Router } from "express";
import HealthController from "../controllers/health.controller";

const apiRoute = Router();
apiRoute.get('/health/checkup', HealthController.checkup);

export default apiRoute;