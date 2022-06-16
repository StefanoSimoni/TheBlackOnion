import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

const Game = sequelize.define(
  'games',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    url: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
)

export default Game