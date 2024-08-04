
import Paths from "@src/common/Paths";
import { Router } from "express";
import AutController from "@src/controllers/AutController";
const router = Router()

router.post(Paths.Auth.Login, AutController.Login )


export default router