const { getUserByEmail, getUserByUserName, createNewAccount, getUserByUserId, updateUserByUserId } = require("../services/auth.services");
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()



module.exports = {
    createNewAccount: async (req, res, next) => {
        let err = new Error()
        try {
            const { email, password, confirmPassword, userName, age, gender, avatar } = req.body

            if (!email || !password || !confirmPassword || !userName || !age || !gender || !avatar) {
                err.message = 'Cần điền đẩy đủ thông tin để tạo tại khoản'
                err.status = 422;
                next(err)
            }

            if (age < 16) {
                err.message = 'Bạn không đủ tuổi để đăng kí tài khoản'
                err.status = 422;
                next(err)
            }

            if (gender < 1 || gender > 3) {
                err.message = 'Giới tính phải nằm trong nam hoặc nữ hoặc giới tính khác'
                err.status = 422;
                next(err)
            }



            if (!validateEmail(email)) {
                err.message = 'Email không được xác thực'
                err.status = 422;
                next(err)
            }

            if (email) {
                let checkExistEmail = await getUserByEmail(email);
                if (checkExistEmail) {
                    err.message = 'Email đã tồn tại'
                    err.status = 422;
                    next(err)
                }
            }

            if (password.replace(/\s/g, '').length <= 6) {
                err.message = 'Mật khẩu cần chứa nhiều hơn 6 kí tự'
                err.status = 422;
                next(err)
            }

            if (password !== confirmPassword) {
                err.message = 'Mật khẩu xác thực không khớp'
                err.status = 422;
                next(err)
            }

            if (userName) {
                let checkExistUserName = await getUserByUserName(userName);
                if (checkExistUserName) {
                    err.message = 'Username đã tồn tại'
                    err.status = 422;
                    next(err)
                }
            };

            if (email && password && confirmPassword && userName && age && gender && avatar) {

                await createNewAccount(email, password, userName, age, gender, avatar)
                err.message = 'Tạo tài khoản thành công'
                err.status = 422;
                next(err)
            }
        } catch (error) {
            err.message = error
            err.status = 422;
            next(err)
        }


    },

    loginAccount: async (req, res, next) => {
        let err = new Error()
        try {
            const { email, password } = req.body
            if (!email || !password) {
                err.message = 'Bạn cần điền đẩy đủ thông tin'
                err.status = 422;
                next(err)
            };

            if (!validateEmail(email)) {
                err.message = 'Email không được xác thực'
                err.status = 422;
                next(err)
            }

            if (password.replace(/\s/g, '').length <= 6) {
                err.message = 'Mật khẩu cần chứa nhiều hơn 6 kí tự'
                err.status = 422;
                next(err)
            }

            let checkExistEmail = await getUserByEmail(email);

            if (!checkExistEmail) {
                err.message = 'Email không tồn tại'
                err.status = 422;
                next(err)
            } else {
                let token = encodeToken(checkExistEmail.id)
                let hashPassword = checkExistEmail.password
                bcrypt.compare(password, hashPassword, function (err, result) {

                    try {
                        if (result) {
                            console.log(token);
                            res.setHeader('Authorization', 'Bearer ' + token)
                            return res.status(200).json(
                                {
                                    status: 200,
                                    message: 'Login thành công'
                                }
                            )

                        } else {
                            err.message = 'Mật khẩu sai'
                            err.status = 422;
                            next(err)
                        }
                    } catch (error) {
                        err.message = error;
                        err.status = 404;
                        next(err)
                    }
                });

            }

        } catch (error) {
            err.message = error;
            err.status = 422;
            next(err)
        }

    },

    updateInfoAccount: async (req, res, next) => {
        const { password, confirmPassword, userName, age, gender, avatar } = req.body;
        let userId = req.user.id

        if (!password || !userName || !age || !gender || !avatar) {
            err.message = 'Cần điển đẩy đủ thông tin để cập nhập tài khoản'
            err.status = 422;
            next(err)
        }

        //xac thuc

        if (age < 16) {
            err.message = 'Bạn không đủ tuổi để đăng kí tài khoản'
            err.status = 422;
            next(err)
        }

        if (gender < 1 || gender > 3) {
            err.message = 'Giới tính phải nằm trong nam hoặc nữ hoặc giới tính khác'
            err.status = 422;
            next(err)
        }

        if (password.replace(/\s/g, '').length <= 6) {
            err.message = 'Mật khẩu cần chứa nhiều hơn 6 kí tự'
            err.status = 422;
            next(err)
        }

        if (password !== confirmPassword) {
            err.message = 'Mật khẩu xác thực không khớp'
            err.status = 422;
            next(err)
        }

        await updateUserByUserId(userId, password, userName, age, gender, avatar)
        err.message = 'Cập nhật tài khoản thành công'
        err.status = 200;
        next(err)

    }

}


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

let encodeToken = (userId) => {
    return JWT.sign(
        {
            iss: 'diepthesang',
            sub: userId,

        },
        process.env.JWT_SECRETKEY,
        {
            expiresIn: 60 * 60 * 12
        }
    )

}