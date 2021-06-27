import { IAuth } from './../types/auth';
import { model, Schema } from 'mongoose'

const authSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

}, { timestamps: true })


export default model<IAuth>('Auth', authSchema)