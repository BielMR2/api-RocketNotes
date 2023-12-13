module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || 'DEFAULT',
        expiresIn: "1d"
    }
}