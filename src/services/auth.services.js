var db = require('../db/models/index')
const bcrypt = require('bcrypt')
const { isArgumentsObject } = require('util/types')
require('dotenv').config()

module.exports = {
    createNewAccount: async (email, password, userName, age, gender, avatar) => {
        try {

            bcrypt.hash(password, 10).then(function (hashPassword) {
                db.User.create(
                    {
                        email: email,
                        password: hashPassword,
                        userName: userName,
                        age: age,
                        gender: gender,
                        avatar: avatar,
                        role: process.env.ROLE_USER
                    }
                )
            }
            )

        } catch (error) {
            return {
                message: 'err createNewAccount'
            }
        }
    },
    getUserByEmail: async (email) => {
        try {
            return await db.User.findOne(
                {
                    where: {
                        email: email
                    }
                }
            )

        } catch (error) {
            return {
                message: 'err getUserByEmail'
            }
        }
    },

    getUserByUserName: async (userName) => {
        try {
            return await db.User.findOne(
                {
                    where: {
                        userName: userName
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err getUserByUserName'
            }
        }
    },

    getUserByUserId: async (userId) => {
        try {
            return await db.User.findOne(
                {
                    where: {
                        id: userId
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err getUserByUserId'
            }
        }
    },

    updateUserByUserId: async (userId, password, userName, age, gender, avatar) => {
        try {

            bcrypt.hash(password, 10).then(function (hashPassword) {
                db.User.update(
                    {
                        password: hashPassword,
                        userName: userName,
                        age: age,
                        gender: gender,
                        avatar: avatar,
                    },
                    {
                        where: {
                            id: userId,
                        }
                    }
                )
            }
            )
        } catch (error) {
            return {
                message:'err updateUserByUserId'
            }
        }
    },

}