const {Song} =  require('../models')


module.exports = {
    async index (req, res) {
        try{
            const songs = await Song.findAll({
                limit: 20
            })
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'Error during fetching the songs.'
            })
        }
    },
    async post (req, res) {
        try{
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the song.'
            })
        }
    },
    async show (req, res) {
        try{
            const song = await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'Error during fetching the song.'
            })
        }
    },
    
}