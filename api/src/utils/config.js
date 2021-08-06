require('dotenv').config()

module.exports = {
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT
}