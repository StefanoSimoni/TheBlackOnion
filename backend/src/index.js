import app from './app.js'
import { sequelize } from './database/database.js'

async function main() {
  app.listen(app.get('port'), () => {
    //start sv en el puerto confg
    console.log('server on port: ' + app.get('port'))
    console.log('http://localhost:' + app.get('port'))
  })
  //start  db connection
  await sequelize.sync({ force: true })
}

main()
