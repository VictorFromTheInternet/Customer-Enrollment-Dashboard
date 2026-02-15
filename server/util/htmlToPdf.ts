import puppeteer from 'puppeteer'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)



//
// util functions
//
export async function htmlToPdfBuffer(htmlStr: string): Promise<Buffer> {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setContent(htmlStr, { waitUntil: 'networkidle0' })
    const pdfBuffer = Buffer.from(await page.pdf({
        format: 'A4',
        landscape: false,
        height: '11in',
        width: '8.5in',
        printBackground: true,
        displayHeaderFooter: true,
        margin: { top: '.5in', bottom: '.5in', left: '.25in', right: '.25in' },
        headerTemplate: `
            <div style="width:100%;text-align:center;font-size:11px;">
                <p>VictorFromTheInternet</p>
            </div>
        `,
        footerTemplate: `
            <div style="width:100%;text-align:center;font-size:11px;">
                <p>Page <span class="pageNumber"></span> of <span class="totalPages"></span></p>
            </div>
        `
    }))
    await browser.close()    

    return pdfBuffer
}

export async function createLocalPdf(buffer: Buffer, filename: string) {
    try {
        const localPath = path.join(__dirname, '..', 'testpdfs', filename)
        await fs.mkdir(dirname(localPath), { recursive: true })
        await fs.writeFile(localPath, buffer)
        console.log('created file:', localPath)
    } catch (err) {
        console.error(err)
    }
}

export default createLocalPdf
