import express, { Request, Response } from 'express'
import { testRouteController, singleRouteController } from '../controllers/singleRouteController.js'
const router = express.Router()

router.get('/health-check', (_req: Request, res: Response) => {
    res.send({ message: 'Hello World!' })
})

router.post('/', singleRouteController)
router.post('/test', testRouteController)

export default router
