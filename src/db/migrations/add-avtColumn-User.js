// module.exports = {
//     up: (queryInterface, Sequelize) => {
//         return Promise.all([
//             queryInterface.addColumn('Users', 'avatar', {
//                 type: Sequelize.STRING,
//                 allowNull: true,
//             })
//         ])
//     },

//     down: (queryInterface, Sequelize) => {
//         return Promise.all([
//             queryInterface.changeColumn('your table name ', 'name', {
//                 type: Sequelize.STRING,
//                 allowNull: true,
//             }, {
//                 transaction,
//             })
//         ])
//     }
// };