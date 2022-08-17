const { createNewPost, getAllPost, getAllPostByStatus, changeStatusPost, getPostByPostId, deletePostByPostId, getCateByCateId, getAllPostByCateId, updatePost } = require("../services/user.services")

module.exports = {
    createNewPost: async (req, res, next) => {
        const { title, description, content, status, avatar, cateId } = req.body
        let userId = req.user.id
        if (!title || !description || !content || !status || !avatar || !cateId) {
            return res.status(422).json(
                {
                    message: 'Bạn cần điền đầy đủ thông tin'
                }
            )
        }

        if (status !== 'STATUS_PUBLIC' && status !== 'STATUS_DRAFT') {
            return res.status(422).json(
                {
                    message: 'Bài viết phải có trạng thái nháp hoặc công khai'
                }
            )
        }

        let checkExistCate = await getCateByCateId(cateId);
        if (!checkExistCate) {
            return res.status(422).json(
                {
                    message: 'Không tìm thấy danh mục'
                }
            )
        }

        await createNewPost(title, description, content, status, avatar, userId, cateId)
        return res.status(200).json(
            {
                message: 'Tạo bài viết thành công'
            }
        )

    },

    getAllPost: async (req, res, next) => {
        let userId = req.user.id
        let post = await getAllPost(userId)
        if (post) {
            return res.status(200).json(
                {
                    data: post
                }
            )

        } else {
            next()
        }
    },

    getAllPostByStatus: async (req, res, next) => {
        const { status } = req.params
        const userId = req.user.id
        console.log(status);
        if (status === 'STATUS_PUBLIC' || status === 'STATUS_DRAFT') {
            let post = await getAllPostByStatus(userId, status)
            return res.status(200).json(
                {
                    data: post
                }
            )
        } else {
            return res.status(404).json(
                {
                    message: 'Không có bài viết nào'
                }
            )
        }
    },
    changeStatusPost: async (req, res, next) => {
        const { postId, status } = req.body
        const userId = req.user.id

        let checkPostByPostId = await getPostByPostId(userId, postId)

        if (!checkPostByPostId) {
            return res.status(404).json(
                {
                    message: 'Bài viết không có'
                }
            )
        }

        if (status === 'STATUS_PUBLIC' || status === 'STATUS_DRAFT') {
            await changeStatusPost(userId, postId, status)
            return res.status(200).json(
                {
                    message: 'Thay đổi trang thái bài viết thành công'
                }
            )
        } else {
            return res.status(422).json(
                {
                    message: 'Không thể thay đổi trạng thái bài viết'
                }
            )
        }

    },

    deletePost: async (req, res, next) => {
        const { postId } = req.body
        console.log(postId)
        const userId = req.user.id

        let checkPostByPostId = await getPostByPostId(userId, postId)

        if (!checkPostByPostId) {
            return res.status(404).json(
                {
                    message: 'Bài viết không có'
                }
            )
        } else {
            await deletePostByPostId(userId, postId)
            return res.status(200).json(
                {
                    message: `xoá thành công bài viết ${postId}`
                }
            )
        }
    },

    getAllPostByCateId: async (req, res, next) => {
        const { cateId } = req.params
        console.log(cateId);
        const userId = req.user.id

        let checkExistCate = await getCateByCateId(cateId);
        if (!checkExistCate) {
            return res.status(404).json(
                {
                    message: 'Danh mục này không có'
                }
            )
        }

        let post = await getAllPostByCateId(userId, cateId);
        return res.status(200).json(
            {
                data: post
            }
        )
    },

    updatePost: async (req, res, next) => {
        const { postId, title, description, content, status, avatar, cateId } = req.body
        const userId = req.user.id;

        if (!title || !description || !content || !status || !avatar || !cateId) {
            return res.status(422).json(
                {
                    message: 'Bạn cần điền đầy đủ thông tin'
                }
            )
        }

        if (status !== 'STATUS_PUBLIC' && status !== 'STATUS_DRAFT') {
            return res.status(422).json(
                {
                    message: 'Bài viết phải có trạng thái nháp hoặc công khai'
                }
            )
        }

        let checkExistPost = await getPostByPostId(userId, postId)
        if (!checkExistPost) {
            return res.status(422).json(
                {
                    message: 'Không tìm thấy bài viết để chỉnh sửa'
                }
            )
        }

        await updatePost(userId, postId, title, description, content, status, avatar, cateId);
        return res.status(200).json(
            {
                message: 'Chỉnh sửa bài viết thành công'
            }
        )

    }
}