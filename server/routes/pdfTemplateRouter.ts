import express, { Request, Response } from 'express'
import {getPdfTemplateHtml, getPdfTemplatePdf} from '../controllers/templatePdf.js'
const router = express.Router()

router.get('/health-check', (_req: Request, res: Response) => {
    res.send({ message: 'Hello World!' })
})

// api/templates/
router.post('/html', getPdfTemplateHtml)
router.post('/data', getPdfTemplatePdf)

export default router
