const express = require('express');
const { createNewPost, getAllPostByStatus, getAllPost, changeStatusPost, deletePost, getAllPostByCateId, updatePost } = require('../controllers/user.controller');
const passportConfig = require('../middlewares/passport.middleware')
const passport = require('passport');
const handleError = require('../middlewares/handleError.miiddleware');
const route = express.Router()
// Hiển thị tất cả bài viết
route.get('/post', passport.authenticate('jwt', { session: false }), getAllPost)
// Hiển thị tất cả bài viết theo trạng thái
route.get('/post/:status', passport.authenticate('jwt', { session: false }), getAllPostByStatus)
// Tạo bài viết mới
route.post('/createPost', passport.authenticate('jwt', { session: false }), createNewPost)
// Chỉnh sửa bài viết 
route.put('/updatePost', passport.authenticate('jwt', { session: false }), updatePost)
// Chuyển trạng thái bài viết công khai và lưu nháp
route.put('/changeStatusPost', passport.authenticate('jwt', { session: false }), changeStatusPost)
// xoá một bài viết
route.delete('/deletePost', passport.authenticate('jwt', { session: false }), deletePost)
// Hiển thị danh sách theo danh mục
route.get('/postByCateId/:cateId', passport.authenticate('jwt', { session: false }), getAllPostByCateId)


// route.use((req, res, next) => {
//     res.status(404).send({
//         status: 404,
//         error: 'not found'
//     })
// });

module.exports = route