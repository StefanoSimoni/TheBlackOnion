import { Games } from '../models/Games.js'

export async function getGames(req, res) {
  try {
    const tasks = await Games.findAll({
      attributes: ['id', 'name', 'year', 'rating', 'url'],
      order: [['rating', 'DESC']],
    })
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function getG5(req, res) {
  try {
    const tasks = await Games.findAll({
      attributes: ['id', 'name', 'year', 'rating', 'url'],
      order: [['rating', 'DESC']],
      limit: 5,
    })
    res.json(tasks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}