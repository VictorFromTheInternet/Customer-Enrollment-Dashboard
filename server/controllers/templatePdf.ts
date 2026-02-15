import puppeteer from 'puppeteer'
import nunjucks from 'nunjucks'
import fs from 'fs/promises'
import path from 'path'

import {htmlToPdfBuffer, createLocalPdf} from '../util/htmlToPdf.js'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// const templatesFolderPath = path.join(__dirname, '..', 'pdf_templates', 'weeklyTraffic.html' )
// console.log(templatesFolderPath)
nunjucks.configure('./pdf_templates', { autoescape: true })

export async function getPdfTemplateHtml(req,res){
    const {data,templateName} = req.body as {data: unknown, templateName: string}
    
    // get css data
    const cssPath = path.join(__dirname, '..', 'pdf_templates', 'styles.css')
    const cssStr = await fs.readFile(cssPath, 'utf-8')

    // create pdf/html str
    const renderedStr = nunjucks.render(`${templateName}.html`, { styles: `<style>${cssStr}</style>`, data })    

    res.send({"htmlString": renderedStr})
}

export async function getPdfTemplatePdf(req,res){
    const {data,templateName} = req.body as {data: unknown, templateName: string}
    
    // get css data
    const cssPath = path.join(__dirname, '..', 'pdf_templates', 'styles.css')
    const cssStr = await fs.readFile(cssPath, 'utf-8')

    // create pdf/html str
    const renderedStr = nunjucks.render(`${templateName}.html`, { styles: `<style>${cssStr}</style>`, data })    

    // get pdf buffer
    const pdfBuffer = await htmlToPdfBuffer(renderedStr)

    // (testing) create local pdf
    createLocalPdf(pdfBuffer, 'output.pdf')

    // send to aws - S3

    // send the (private) url

    res.send({"htmlString": renderedStr})
}


export default getPdfTemplateHtml
