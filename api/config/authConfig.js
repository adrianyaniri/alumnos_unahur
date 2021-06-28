module.exports = {
    rounds: process.env.ROUNDS || 10,
    secret: process.env.SECRET || 'persistencia',
    expire: process.env.EXPIRE || 3600
}