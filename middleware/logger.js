const logger = (req, res, next) => {
    console.log('logger middleware: ')
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    console.log('----- ')
    next()
}

module.exports = logger;