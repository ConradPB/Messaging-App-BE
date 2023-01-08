import { Router } from "express"

const router = Router()

import Session from "../controllers/session"

// *** create an instance of the controller class ***

const session = new Session()

router.get('/', session.getUser)


export default router
