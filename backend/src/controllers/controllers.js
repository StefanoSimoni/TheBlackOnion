import Game from '../models/Game.js'
import Cpu from '../models/Cpu.js'
import Gpu from '../models/Gpu.js'
import Requeriment from '../models/Requeriment.js'
import { Op } from 'sequelize'
import { std } from 'mathjs'

const simulate = (arrayCalc) => {
  const user = arrayCalc[0]
  const min = arrayCalc[1]
  const mid = arrayCalc[2]

  if (user === min) {
    return 0
  }
  if (user === mid) {
    return 0.5
  }

  const sumArrayCalc = arrayCalc.reduce((a, b) => a + b, 0)
  const Average = sumArrayCalc / arrayCalc.length
  const STDEV = std(arrayCalc)
  const Norm = Math.abs(user - Average) / STDEV
  const val = Norm * 10

  console.log(Average, STDEV, Norm, val)

  if (val > 10) {
    return 10
  } else {
    return val
  }
}

export const getDefault = async (req, res) => {
  res.json({
    name: 'Rest API - TheBlackOnion Project',
    version: '1.0.0',
    description: 'REST API for Gamer page',
    Endpoints: {
      Games: {
        '/game/:gameid': 'List a game',
        '/games': 'List all games',
        '/games5': 'List 5 games for carousel',
        '/games30': 'List 30 games for simulated',
      },
      Cpus: {
        '/cpus': 'List all cpu',
      },
      Gpus: {
        '/gpus': 'List all gpu',
      },
      Requeriments: {
        '/requirement/:gameid': 'Requeriments of a game',
      },
      Simulate: {
        '/simgame': 'Simulate user configuration vs game requirement',
        '/simconf': 'Simulate user configuration vs games compatibles',
      },
    },
  })
}

export const getGame = async (req, res) => {
  const { gameid } = req.params
  try {
    const response = await Game.findOne({
      attributes: ['id', 'name', 'year', 'rating', 'url'],
      where: { id: gameid },
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getGames = async (req, res) => {
  try {
    const response = await Game.findAll({
      attributes: ['id', 'name', 'year', 'rating', 'url'],
      order: [['rating', 'DESC']],
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getG5 = async (req, res) => {
  try {
    const response = await Game.findAll({
      attributes: ['id', 'name', 'year', 'rating', 'url'],
      order: [['rating', 'DESC']],
      where: {
        id: {
          [Op.or]: [3, 6, 18, 35, 79],
        },
      },
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getG30 = async (req, res) => {
  try {
    const response = await Game.findAll({
      attributes: ['id', 'name', 'year', 'rating', 'url'],
      order: [['id', 'ASC']],
      limit : 30,
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getCpus = async (req, res) => {
  try {
    const response = await Cpu.findAll({
      attributes: ['id', 'name', 'brand', 'score'],
      order: [['score', 'asc']],
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getGpus = async (req, res) => {
  try {
    const response = await Gpu.findAll({
      attributes: ['id', 'name', 'brand', 'score'],
      order: [['score', 'asc']],
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getRequeriment = async (req, res) => {
  const { gameid } = req.params
  try {
    const response = await Requeriment.findAll({
      attributes: [
        'id',
        'game_id',
        'type',
        'cpu1_id',
        'cpu2_id',
        'gpu1_id',
        'gpu2_id',
        'men',
        'ssd',
      ],
      where: { game_id: gameid },
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const postSimGame = async (req, res) => {
  const { gameid, cpu, gpu, ram, ssd } = req.body
  try {
    const allCpu = await Cpu.findAll({
      attributes: ['id', 'name', 'brand', 'score'],
      order: [['id', 'ASC']],
    })
    const allGpu = await Gpu.findAll({
      attributes: ['id', 'name', 'brand', 'score'],
      order: [['id', 'ASC']],
    })
    // SIMULACION

    const selectGame = await Requeriment.findAll({
      attributes: [
        'id',
        'game_id',
        'type',
        'cpu1_id',
        'cpu2_id',
        'gpu1_id',
        'gpu2_id',
        'men',
        'ssd',
      ],
      where: { game_id: gameid },
    })

    const userCpu = allCpu[cpu - 1]
    const userGpu = allGpu[gpu - 1]

    const minCpuIntel = allCpu[selectGame[0].cpu1_id - 1]
    const minCpuAMD = allCpu[selectGame[0].cpu2_id - 1]
    const midCpuIntel = allCpu[selectGame[1].cpu1_id - 1]
    const midCpuAMD = allCpu[selectGame[1].cpu2_id - 1]

    const minGpuNvidia = allGpu[selectGame[0].gpu2_id - 1]
    const minGpuAMD = allGpu[selectGame[0].gpu1_id - 1]
    const midGpuNvidia = allGpu[selectGame[1].gpu2_id - 1]
    const midGpuAMD = allGpu[selectGame[1].gpu1_id - 1]

    const minMen = selectGame[0].men
    const midMen = selectGame[1].men

    const minSsd = selectGame[0].ssd
    const midSsd = selectGame[1].ssd

    let arrayCalc

    if (userCpu.branch === 'AMD') {
      arrayCalc = [userCpu.score, minCpuAMD.score, midCpuAMD.score]
    } else {
      arrayCalc = [userCpu.score, minCpuIntel.score, midCpuIntel.score]
    }

    const valorCpu = simulate(arrayCalc)

    if (userGpu.branch === 'AMD') {
      arrayCalc = [userGpu.score, minGpuAMD.score, midGpuAMD.score]
    } else {
      arrayCalc = [userGpu.score, minGpuNvidia.score, midGpuNvidia.score]
    }

    const valorGpu = simulate(arrayCalc)

    const valorRam = simulate([ram, minMen, midMen])

    let valorSsd

    if (ssd === true && ssd === minSsd && ssd === midSsd) {
      valorSsd = 10
    } else if (ssd === true && ssd === midSsd) {
      valorSsd = 5
    } else {
      valorSsd = 0
    }

    const result = [
      {
        label: 'Configuración recomendada',
        backgroundColor: 'rgba(0,181,198,0.2)',
        borderColor: 'rgba(0,255,198,1)',
        pointBackgroundColor: 'rgba(0,255,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,255,198,1)',
        data: [5, 5, 5, 5],
      },
      {
        label: 'Tu configuración',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [parseInt(valorCpu.toFixed(0)), parseInt(valorGpu.toFixed(0)), parseInt(valorRam.toFixed(0)), valorSsd],
      },
    ]

    res.json(result)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const postSimConf = async (req, res) => {
  const { gameid } = req.params
  try {
    const response = await Requeriment.findAll({
      attributes: [
        'id',
        'game_id',
        'type',
        'cpu1_id',
        'cpu2_id',
        'gpu1_id',
        'gpu2_id',
        'men',
        'ssd',
      ],
      where: { game_id: gameid },
    })
    res.json(response)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
