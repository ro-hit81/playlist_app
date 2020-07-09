const {Bookmark, Song} =  require('../models')
const {Op, where} = require('sequelize')
const _ = require('lodash')

module.exports = {
    async index (req, res) {
        try{
            const {songId, userId} = req.query
            const where = {
                UserId: userId
            }
            if(songId) {
                where.SongId = songId
            }
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ]
            })
                // .map(bookmark => bookmark.toJSON())
                // .map(bookmark => _.extend({
                //     bookmarkId: bookmark.id
                // }, bookmark.Song))
            res.send(bookmarks)
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