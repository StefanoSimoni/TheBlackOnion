import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Game = sequelize.define(
  'game',
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
