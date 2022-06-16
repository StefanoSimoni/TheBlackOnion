import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

const Gpu = sequelize.define(
  'gpus',
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

export default Gpu
