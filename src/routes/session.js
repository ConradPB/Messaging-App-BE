import { Router } from "express"

const router = Router()

import Session from "../controllers/session"

const session = new Session()

router.get('/', session.getUser)


export default router
