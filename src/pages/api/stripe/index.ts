import { NextApiRequest, NextApiResponse } from 'next'

export default function stripe(req: NextApiRequest, res: NextApiResponse) {
    console.log(req)

    res.status(200)
}