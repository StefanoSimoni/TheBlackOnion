import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Cpu = sequelize.define(
  'cpu',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
)
