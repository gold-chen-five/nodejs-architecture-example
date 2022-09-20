import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import User from '@/resources/user/user.interface'

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true //if you save trim as true, ' hello ' as 'hello'
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } //Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema
)

UserSchema.pre<User>('save', async function (next){
    // Only run this function if password was moddified (not on other update functions)
    if(!this.isModified('password')) return next()

    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash

    next()
})


UserSchema.methods.isValidPassword = async function(password: string): Promise<Error | boolean>{
    return await bcrypt.compare(password, this.password)
}

export default model<User>('User',UserSchema)