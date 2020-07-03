const AuthenticationController = require('./controllers/AuthenticationController')
const { register } = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.post('/register', AuthenticationController.register)
}
