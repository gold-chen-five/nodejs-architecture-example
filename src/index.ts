import 'dotenv/config'
import 'module-alias/register'
import validateEnv from '@/utils/validateEnv'
import App from './app'
import PostContoller from '@/resources/post/post.controller'
import UserController from '@/resources/user/user.controller'
validateEnv()

const app = new App([new PostContoller(),new UserController()], Number(process.env.PORT))

app.listen()