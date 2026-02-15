import express from 'express'
import dotenv from 'dotenv'
import pdf_router from './routes/pdfTemplateRouter.js'
import docs_router from './routes/docs.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 3000

// middleware
app.use(express.json())

// routes
app.use('/docs', docs_router)
app.use('/api/templates/', pdf_router)

app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})
