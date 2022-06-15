import { config } from 'dotenv'
config()

export default {
  DB_URI:
    'postgresql://' +
    process.env.DB_USER +
    ':' +
    process.env.DB_PASS +
    '@' +
    process.env.DB_HOST +
    ':' +
    process.env.DB_PORT +
    '/' +
    process.env.DB_DDBB,

  PORT: process.env.PORT || 4000,

}
