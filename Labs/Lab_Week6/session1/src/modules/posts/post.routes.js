import {Router} from 'express'
import * as PC from './post.controller.js'
import { userIdExist } from '../../middleware/userIdExist.js'


const router = Router()
router.get('/',PC.getPost)
router.get('/all',PC.getPostWithUsers)
router.post('/',userIdExist,PC.addPost)

export default router