import app from './app.js'
import { sequelize } from './database/database.js'

import './models/Cpu.js'
import './models/Gpu.js'
import './models/Game.js'
import './models/Requeriment.js'

//import populate from './database/populate.js'

async function main() {
  app.listen(app.get('port'), () => {
    //start sv en el puerto confg
    console.log('server on port: ' + app.get('port'))
    console.log('http://localhost:' + app.get('port'))
  })
  try {
    await sequelize.sync({ force: false })
    //await populate()
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main()
