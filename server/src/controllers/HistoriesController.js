const {History, Song} =  require('../models')
const {Op, where} = require('sequelize')
const _ = require('lodash')

module.exports = {
    async index (req, res) {
        try{
            const userId = req.user.id
            const histories = await History.findAll({
                where: {
                    UserId: userId
                },
                include: [
                    {
                        model: Song
                    }
                ]
            })
            res.send(_.uniqBy(histories
                .map(history => history.toJSON())
                .map(history => _.extend(
                    {},
                    history.Song,
                    history)
            ), history => history.SongId))
        } catch (err) {
            res.status(500).send({
                error: 'Error during fetching the history.'
            })
        }
    },
    async post (req, res) {
        try{
            const userId = req.user.id
            const {songId} = req.body
            const history = await History.create({
                SongId: songId,
                UserId: userId
            })
            res.send(history)
        } catch (err) {
            res.status(500).send({
                error: 'Error occureds trying to create history object.'
            })
        }
    }
}