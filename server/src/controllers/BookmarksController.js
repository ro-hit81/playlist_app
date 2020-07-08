const {Bookmark} =  require('../models')
const {Op} = require('sequelize')


module.exports = {
    async index (req, res) {
        try{
            const {songId, userId} = req.query
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'Error during fetching the bookmark.'
            })
        }
    },
    async post (req, res) {
        try{
            const {songId, userId} = req.body
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            if (bookmark) {
                return res.status(400).send({
                    error: "You already have set this as a bookmark."
                })
            }
            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error: 'Error occureds trying bookmark the song.'
            })
        }
    },
    async delete (req, res) {
        try{
            const {bookmarkId} = req.params
            const bookmark = await Bookmark.findByPk(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'Error during removing boomark of the song.'
            })
        }
    }
}