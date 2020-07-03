module.exports= {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'playlist',
        user: process.env.DB_USER || 'playlist',
        password: process.env.DB_PASS || 'playlist',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './playlist.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
