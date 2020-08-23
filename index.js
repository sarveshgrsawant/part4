const app = require('../bloglist/app')
const config = require('../bloglist/utils/config')
const logger = require('../bloglist/utils/logger')

const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})