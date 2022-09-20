import Joi from 'joi'

const register = Joi.object({
    name: Joi.string().max(30).required(),

    email: Joi.string().email(),

    password: Joi.string().required(),

})

const login = Joi.object({
    email: Joi.string().email(),

    password: Joi.string().required(),
})

export default { register, login }