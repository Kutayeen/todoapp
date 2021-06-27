import { Response, Request } from 'express'
import { IAuth } from './../../types/auth'
import Auth from '../../models/auth'

const getAuth = async (req: Request, res: Response): Promise<void> => {
    try {
        const auths: IAuth[] = await Auth.find()
        res.status(200).json({ auths })
    } catch (error) {
        throw error
    }
}

const putAuth = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IAuth, 'email' | 'password' >

        const auth: IAuth = new Auth({
            email: body.email,
            password: body.password,
        }) 

        const newAuth: IAuth = await auth.save()
        const allAuths: IAuth[] = await Auth.find()

        res.status(201).json({ message: 'User added', auth: newAuth, auths: allAuths })
    } catch (error) {
        throw error
    }
}

export { getAuth, putAuth }
