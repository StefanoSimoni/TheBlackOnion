import { Sequelize } from 'sequelize'
import config from './../config.js'

export const sequelize = new Sequelize(config.DB_URI)