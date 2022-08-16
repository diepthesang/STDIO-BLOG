const { getUserByEmail, getUserByUserName, createNewAccount } = require("../services/auth.services");
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()



module.exports = {
    createNewAccount: async (req, res, next) => {
        const { email, password, confirmPassword, userName, age, gender, avatar } = req.body

        if (!email || !password || !confirmPassword || !userName || !age || !gender || !avatar) {
            return res.status(422).json(
                {
                    message: 'Cần điền đầy đủ thông tin để tạo tài khoản'
                }
            )
        }

        if (age < 16) {
            return res.status(422).json(
                {
                    message: 'Bạn không đủ tuổi để đăng kí tài khoản'
                }
            )
        }

        if (gender < 1 || gender > 3) {
            return res.status(422).json(
                {
                    message: 'Giới tính phải nằm trong nam hoặc nữ hoặc giới tính khác'
                }
            )
        }



        if (!validateEmail(email)) {
            return res.status(422).json(
                {
                    message: 'Email không được xác thực'
                }
            )
        }

        if (email) {
            let checkExistEmail = await getUserByEmail(email);
            if (checkExistEmail) {
                return res.status(422).json(
                    {
                        message: 'Email đã tồn tại'
                    }
                )
            }
        }

        if (password.replace(/\s/g, '').length <= 6) {
            return res.status(422).json(
                {
                    message: 'Mật khẩu cần chứa nhiều hơn 6 kí tự'
                }
            )
        }

        if (password !== confirmPassword) {
            return res.status(422).json(
                {
                    message: 'Mật khẩu xác thực không khớp'
                }
            )
        }

        if (userName) {
            let checkExistUserName = await getUserByUserName(userName);
            if (checkExistUserName) {
                return res.status(422).json(
                    {
                        message: 'Username đã tồn tại'
                    }
                )
            }
        };

        if (email && password && confirmPassword && userName && age && gender && avatar) {

            await createNewAccount(email, password, userName, age, gender, avatar)
            return res.status(200).json(
                {
                    message: 'Tạo tài khoản thành công'
                }
            )
        }


    },

    loginAccount: async (req, res, next) => {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).json(
                {
                    message: 'Cần điền đầy đủ thông tin để tạo tài khoản'
                }
            )
        };

        if (!validateEmail(email)) {
            return res.status(422).json(
                {
                    message: 'Email không được xác thực'
                }
            )
        }

        if (password.replace(/\s/g, '').length <= 6) {
            return res.status(422).json(
                {
                    message: 'Mật khẩu cần chứa nhiều hơn 6 kí tự'
                }
            )
        }

        let checkExistEmail = await getUserByEmail(email);

        if (!checkExistEmail) {
            return res.status(422).json(
                {
                    message: 'Email không tồn tại'
                }
            )
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
                                message: 'Login thành công'
                            }
                        )

                    } else {
                        return res.status(422).json(
                            {
                                message: 'Mật khẩu sai'
                            }
                        )
                    }
                } catch (error) {
                    return res.json(err)
                }
            });

        }
    },

    updateInfoAccount: async (req, res, next) => {
        const { password, userName, age, gender, avatar } = req.body;
        if (!password || !userName || !age || !gender || !avatar) {
            return res.status(422).json(
                {
                    message: 'Cần điền đầy đủ thông tin để cập nhật tài khoản'
                }
            )
        }
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