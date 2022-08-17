const db = require("../db/models")

module.exports = {
    createNewPost: async (title, des, content, status, avt, userId, cateId) => {
        try {
            await db.Post.create(
                {
                    title: title,
                    description: des,
                    content: content,
                    status: status,
                    avatar: avt,
                    userId: userId,
                    cateId: cateId
                }

            )
        } catch (error) {
            return {
                message: 'error createNewPost'
            }
        }
    },

    getAllPost: async (userId) => {
        try {
            return await db.Post.findAll(
                {
                    where: {
                        userId: userId
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err getAllPost'
            }
        }
    },

    getAllPostByStatus: async (userId, status) => {
        try {
            return await db.Post.findAll(
                {
                    where: {
                        userId: userId,
                        status: status
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err getAllPostByStatus'
            }
        }
    },

    changeStatusPost: async (userId, postId, status) => {
        try {
            await db.Post.update(
                {
                    status: status
                },
                {
                    where: {
                        userId: userId,
                        id: postId,
                    }
                }
            )
        } catch (error) {

        }
    },

    getPostByPostId: async (userId, postId) => {
        try {
            let post = await db.Post.findOne(
                {
                    where: {
                        userId: userId,
                        id: postId
                    }
                }
            )

            return post
        } catch (error) {
            return {
                message: 'err getPostByPostId'
            }
        }
    },


    deletePostByPostId: async (userId, postId) => {
        try {
            await db.Post.destroy(
                {
                    where: {
                        userId: userId,
                        id: postId
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err deletePostByPostId'
            }
        }
    },

    getAllPostByCateId: async (userId, cateId) => {
        try {
            let post = await db.Post.findAll(
                {
                    where: {
                        userId: userId,
                        cateId: cateId,
                    }
                }
            )
            return post
        } catch (error) {
            return {
                message: 'err getAllPostByCateId'
            }
        }
    },

    getCateByCateId: async (cateId) => {
        try {
            let cate = await db.Category.findOne(
                {
                    where: {
                        id: cateId
                    }
                }
            )
            return cate;
        } catch (error) {
            return {
                message: 'err getCateByCateId'
            }
        }

    },

    updatePost: async (userId, postId, title, description, content, status, avatar, cateId) => {
        try {
            await db.Post.update(
                {
                    title: title,
                    description: description,
                    content: content,
                    status: status,
                    avatar: avatar,
                    cateId: cateId,
                },
                {
                    where: {
                        userId: userId,
                        id: postId
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err updatePost'
            }
        }
    }


}