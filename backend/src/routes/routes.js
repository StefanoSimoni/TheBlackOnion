import { Router } from 'express'
import {
  getDefault,
  getGames,
  getG5,
  getCpus,
  getGpus,
  getRequeriment,
  postSimGame,
  postSimConf
} from '../controllers/controllers.js'

const router = Router()

router.get('/', getDefault)
router.get('/games', getGames)
router.get('/games5', getG5)
router.get('/cpus', getCpus)
router.get('/gpus', getGpus)
router.get('/requirement/:gameid', getRequeriment)
router.post('/simgame', postSimGame)
router.post('/simconf', postSimConf)


export default router
