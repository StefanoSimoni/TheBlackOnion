import { Router } from 'express'
import {
  getDefault,
  getGame,
  getGames,
  getG5,
  getG30,
  getCpus,
  getGpus,
  getRequeriment,
  postSimGame,
  postSimConf
} from '../controllers/controllers.js'

const router = Router()

router.get('/', getDefault)
router.get('/game/:gameid', getGame)
router.get('/games', getGames)
router.get('/games5', getG5)
router.get('/games30', getG30)
router.get('/cpus', getCpus)
router.get('/gpus', getGpus)
router.get('/requeriment/:gameid', getRequeriment)
router.post('/simgame', postSimGame)
router.post('/simconf', postSimConf)

export default router
