import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import Game from './Game.js'
import Cpu from './Cpu.js'
import Gpu from './Gpu.js'

const Requeriment = sequelize.define(
  'requeriments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    men: {
      type: DataTypes.INTEGER,
    },
    ssd: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
)

// Game Relationship
Requeriment.belongsTo(Game, {
  foreignKey: 'game_id',
  sourceKey: 'id',
})

// Cpu Relationship
Requeriment.belongsTo(Cpu, {
  foreignKey: 'cpu1_id',
  sourceKey: 'id',
})
Requeriment.belongsTo(Cpu, {
  foreignKey: 'cpu2_id',
  sourceKey: 'id',
})

Requeriment.belongsTo(Gpu, {
  foreignKey: 'gpu1_id',
  sourceKey: 'id',
})

Requeriment.belongsTo(Gpu, {
  foreignKey: 'gpu2_id',
  sourceKey: 'id',
})

export default Requeriment