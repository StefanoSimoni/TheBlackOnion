import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Game } from './Game.js'
import { Cpu } from './Cpu.js'
import { Gpu } from './Gpu.js'

export const Requeriment = sequelize.define(
  'requeriment',
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
Requeriment.hasOne(Game, {
  foreignKey: 'game_id',
  sourceKey: 'id',
})
Game.belongsTo(Requeriment, {
  foreignKey: 'game_id',
  sourceKey: 'id',
})

// Cpu Relationship
Requeriment.hasOne(Cpu, {
  foreignKey: 'cpu1_id',
  sourceKey: 'id',
})
Cpu.belongsTo(Requeriment, {
  foreignKey: 'cpu1_id',
  sourceKey: 'id',
})

Requeriment.hasOne(Cpu, {
  foreignKey: 'cpu2_id',
  sourceKey: 'id',
})
Cpu.belongsTo(Requeriment, {
  foreignKey: 'cpu2_id',
  sourceKey: 'id',
})

// Gpu Relationship
Requeriment.hasOne(Gpu, {
  foreignKey: 'gpu1_id',
  sourceKey: 'id',
})
Cpu.belongsTo(Requeriment, {
  foreignKey: 'gpu1_id',
  sourceKey: 'id',
})

Requeriment.hasOne(Gpu, {
  foreignKey: 'gpu2_id',
  sourceKey: 'id',
})
Cpu.belongsTo(Requeriment, {
  foreignKey: 'gpu2_id',
  sourceKey: 'id',
})
