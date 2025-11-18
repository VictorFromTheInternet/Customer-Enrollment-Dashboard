import express from 'express'
import {testRouteController, singleRouteController} from '../controllers/singleRouteController.js'
const router = express.Router()


router.get('/health-check',(req,res)=>{

    res.send({"message":"Hello World!"})
})

router.post('/', singleRouteController)
router.post('/test', testRouteController)


export default router