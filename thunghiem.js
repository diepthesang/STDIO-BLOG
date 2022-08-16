require('dotenv').config()


var n = 'eheheheh*( *&$) ehehhe'

console.log(n.replace(/\s/g, '').length * 2)


console.log(process.env.ROLE_USER)