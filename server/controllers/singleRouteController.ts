import type { Request, Response } from 'express'

export async function singleRouteController(_req: Request, res: Response) {
    res.status(501).json({ message: 'Not implemented' })
}

export async function testRouteController(_req: Request, res: Response) {
    res.status(501).json({ message: 'Not implemented' })
}
