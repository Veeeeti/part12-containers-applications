// const MONGO_URL = process.env.MONGO_URL || undefined
const MONGO_URL = 'mongodb://the_username:the_password@localhost:3456/the_database' || undefined
// const REDIS_URL = process.env.REDIS_URL || undefined
const REDIS_URL = '//localhost:6379' || undefined

module.exports = {
  MONGO_URL,//: 'mongodb://the_username:the_password@localhost:3456/the_database',
  REDIS_URL//: '//localhost:6378'
}