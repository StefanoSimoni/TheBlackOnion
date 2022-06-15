import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    name: 'Rest API - TheBlackOnion Project',
    version: '1.0.0',
    description: 'REST API for Gamer page',
    Endpoints: {
      Games: {
        '/games': 'List all games',
        '/games5': 'List 5 games for carousel',
      },
      Cpus: {
        '/cpus': 'List all cpu',
      },
      Gpus: {
        '/gpus': 'List all cpu',
      },
      Requeriments: {
        '/Requeriment/:gameid': 'Requeriments of a game',
      },
      Simulate: {
        '/simgame': 'Simulate user configuration vs game requirement',
        '/simconf': 'Simulate user configuration vs games compatibles',
      },
    },
  })
})

export default router
