const { createNewPost, getAllPost, getAllPostByStatus, changeStatusPost, getPostByPostId, deletePostByPostId, getCateByCateId, getAllPostByCateId, updatePost } = require("../services/user.services")

module.exports = {
    createNewPost: async (req, res, next) => {
        let err = new Error()
        try {
            const { title, description, content, status, avatar, cateId } = req.body
            let userId = req.user.id
            if (!title || !description || !content || !status || !avatar || !cateId) {
                err.message = 'Bạn cần điền đầy đủ thông tin'
                err.status = 422;
                next(err)
            }

            if (status !== 'STATUS_PUBLIC' && status !== 'STATUS_DRAFT') {
                err.message = 'Bài viết phải ở trạng thái nháp hoặc công khai'
                err.status = 422;
                next(err)
            }

            let checkExistCate = await getCateByCateId(cateId);
            if (!checkExistCate) {
                err.message = 'Không tìm thấy bài viết'
                err.status = 422;
                next(err)
            }

            await createNewPost(title, description, content, status, avatar, userId, cateId)
            err.message = 'Tạo bài viết thành công'
            err.status = 200;
            next(err)
        } catch (error) {
            next(error)
        }

    },

    getAllPost: async (req, res, next) => {
        let err = new Error()
        try {
            let userId = req.user.id
            let post = await getAllPost(userId)
            if (post) {
                return res.status(200).json(
                    {
                        data: post
                    }
                )

            } else {
                let error = new Error('Không có data')
                err.statusCode = 500
                next(error)
            }
        } catch (error) {
            next(error)
        }
    },

    getAllPostByStatus: async (req, res, next) => {
        let err = new Error()
        const { status } = req.params
        const userId = req.user.id
        console.log(status);
        if (status === 'STATUS_PUBLIC' || status === 'STATUS_DRAFT') {
            let post = await getAllPostByStatus(userId, status)
            return res.status(200).json(
                {
                    status: 200,
                    data: post
                }
            )
        } else {
            err.message = 'Không có bài viết nào'
            err.status = 200;
            next(err)
        }
    },
    changeStatusPost: async (req, res, next) => {
        let err = new Error()
        const { postId, status } = req.body
        const userId = req.user.id

        let checkPostByPostId = await getPostByPostId(userId, postId)

        if (!checkPostByPostId) {
            err.message = 'Bài viết không có'
            err.status = 200;
            next(err)
        }

        if (status === 'STATUS_PUBLIC' || status === 'STATUS_DRAFT') {
            await changeStatusPost(userId, postId, status)
            return res.status(200).json(
                {
                    status: 200,
                    message: 'Thay đổi trang thái bài viết thành công'
                }
            )
        } else {
            err.message = 'Không thể thay đổi trạng thái bài viết'
            err.status = 422;
            next(err)
        }

    },

    deletePost: async (req, res, next) => {
        let err = new Error()
        const { postId } = req.body
        console.log(postId)
        const userId = req.user.id

        let checkPostByPostId = await getPostByPostId(userId, postId)

        if (!checkPostByPostId) {
            err.message = 'Bài viết không có'
            err.status = 500;
            next(err)
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
        let err = new Error()
        const { cateId } = req.params
        console.log(cateId);
        const userId = req.user.id

        let checkExistCate = await getCateByCateId(cateId);
        if (!checkExistCate) {
            err.message = 'Danh mục này không có'
            err.status = 404;
            next(err)
        }

        let post = await getAllPostByCateId(userId, cateId);
        return res.status(200).json(
            {
                message: 200,
                data: post
            }
        )
    },

    updatePost: async (req, res, next) => {
        let err = new Error()
        const { postId, title, description, content, status, avatar, cateId } = req.body
        const userId = req.user.id;

        if (!title || !description || !content || !status || !avatar || !cateId) {
            err.message = 'Bạn cần điền đầy đủ thông tin'
            err.status = 422;
            next(err)
        }

        if (status !== 'STATUS_PUBLIC' && status !== 'STATUS_DRAFT') {
            err.message = 'Bài viết phải có trạng thái nháp hoặc công khai'
            err.status = 422;
            next(err)
        }

        let checkExistPost = await getPostByPostId(userId, postId)
        if (!checkExistPost) {
            err.message = 'Không tìm thấy bài viết để chỉnh sửa'
            err.status = 422;
            next(err)
        }

        await updatePost(userId, postId, title, description, content, status, avatar, cateId);
        return res.status(200).json(
            {
                message: 'Chỉnh sửa bài viết thành công'
            }
        )

    }
}