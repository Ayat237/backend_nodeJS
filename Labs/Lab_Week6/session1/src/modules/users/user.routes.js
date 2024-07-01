
import {Router} from 'express'
import * as UC from './user.controller.js'
import { emailExist } from '../../middleware/emailExist.js'

const router = Router()



router.get('/',UC.getUser)
router.get('/:id/posts',UC.getOneUserWithPosts)
router.post('/',emailExist,UC.addUser)
router.patch('/:id',UC.updateUser)
router.delete('/:id',UC.deleteUser)


export default router